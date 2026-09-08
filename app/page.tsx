import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CopyButton } from '@/components/copy-button';
import { TailoredPlan } from '@/components/tailored-plan';
import { BASE, dayText, fullPlanText, plan } from '@/lib/plan';
import type { CSSProperties } from 'react';

export const dynamic = 'force-static';

export default function Home() {
  return <>
    <a className="skip-link" href="#routine">Skip to the workouts</a>
    <header className="site-header"><a href="#top" className="wordmark">OHWISEY<span className="brand-dot" /></a><span className="edition">TRAINING / V2 + MY CHANGE</span></header>
    <main id="top">
      <section className="intro" aria-labelledby="title">
        <div><p className="eyebrow">THE PLAN FROM MY VIDEO</p><h1 id="title">Luke’s lean<br /><span>bulk plan.</span></h1><p className="intro-text">Three days on. One day off. Repeat.<br />My AI plan, with my dip substitution.</p></div>
        <div className="take-plan"><CopyButton primary text={fullPlanText()} label="Copy the whole plan" /><a className="download-link" href={`${BASE}/luke-lean-bulk-v2.pdf`} download><Download aria-hidden="true" size={18} /> Download the original PDF</a><a className="text-link" href={`${BASE}/plan.txt`} download>Save as a text file <ArrowDown aria-hidden="true" size={15} /></a><p className="personal-note">These are my starting weights while I focused on form. Choose loads you can control. The calorie targets were set for me, too.</p></div>
      </section>
      <nav className="cycle" aria-label="Jump to a training day">
        {plan.days.map(d => <a key={d.id} href={`#${d.id}`} style={{'--day-color':d.color} as CSSProperties}><span>{d.number}</span><strong>{d.name}</strong><ArrowDown size={18} aria-hidden="true" /></a>)}
        <a href="#rest" style={{'--day-color':'#80c6b1'} as CSSProperties}><span>04</span><strong>Rest</strong><ArrowDown size={18} aria-hidden="true" /></a>
      </nav>
      <div className="section-links"><p>A rolling split. Your rest day moves across the week.</p><a href="#make-your-own" className="tailored-link">Make your own plan</a><a href="#nutrition">Nutrition</a><a href="#progression">Progression</a></div>
      <section id="routine" aria-label="Training plan">
        {plan.days.map(day => <section id={day.id} key={day.id} className="workout" style={{'--day-color':day.color} as CSSProperties} aria-labelledby={`${day.id}-heading`}>
          <div className="workout-heading"><div className="day-label"><span className="day-number">{day.number}</span><div><h2 id={`${day.id}-heading`}>{day.name}</h2><p>{day.focus}</p></div></div><CopyButton text={dayText(day)} label={`Copy ${day.name}`} /></div>
          <Table className="workout-table"><TableHeader><TableRow><TableHead scope="col">Exercise</TableHead><TableHead scope="col">Sets × reps</TableHead><TableHead scope="col">Rest</TableHead><TableHead scope="col">Starting weight</TableHead></TableRow></TableHeader><TableBody>
            {day.exercises.map(e => <TableRow key={e.name}><TableCell><span className="exercise-name">{e.name}</span>{'optional' in e && e.optional && <span className="exercise-tag">Optional</span>}{'core' in e && e.core && <span className="exercise-tag core-tag">Core</span>}{'note' in e && <span className="exercise-tag">My substitution</span>}</TableCell><TableCell className="sets">{'prescription' in e ? e.prescription : `${e.sets} × ${e.reps}`}</TableCell><TableCell className="rest-time">{e.rest}</TableCell><TableCell className="starting-load">{e.start}</TableCell></TableRow>)}
          </TableBody></Table>
          {day.exercises.filter(e => 'note' in e).map(e => 'note' in e && <p key={e.name} className="workout-note">{e.note}</p>)}
        </section>)}
      </section>
      <section id="rest" className="rest-section" aria-labelledby="rest-heading"><span className="day-number">04</span><div><p className="eyebrow">RECOVER / SLEEP / REPEAT</p><h2 id="rest-heading">Take the rest day.</h2><p>{plan.rest}</p></div><a href="#push" className="loop-link">Back to Push ↗</a></section>
      <section id="progression" className="guidance" aria-label="Progression and recovery"><div><p className="eyebrow">MAKE THE NEXT SESSION COUNT</p><h2>How to progress</h2><ol>{plan.progression.map(s => <li key={s}>{s}</li>)}</ol></div><div><p className="eyebrow">WHEN RECOVERY TAKES A HIT</p><h2>Adjust the day</h2><ul>{plan.recovery.map(s => <li key={s}>{s}</li>)}</ul></div></section>
      <section id="nutrition" className="nutrition-section" aria-labelledby="nutrition-heading"><div className="section-title"><p className="eyebrow">FOOD / ORIGINAL TARGETS</p><h2 id="nutrition-heading">What the plan had me eating</h2><p>These were my targets, not a calorie prescription for everyone.</p></div><div className="nutrition-grid">{plan.nutrition.map((n,i) => <article key={n.day} className={`nutrition-day nutrition-${i}`}><h3>{n.day}</h3><p className="calories">{n.calories}<span>kcal</span></p><dl><div><dt>Protein</dt><dd>{n.protein}</dd></div><div><dt>Carbs</dt><dd>{n.carbs}</dd></div><div><dt>Fat</dt><dd>{n.fat}</dd></div></dl></article>)}</div><ul className="nutrition-notes">{plan.nutritionNotes.map(s => <li key={s}>{s}</li>)}</ul></section>
      <section className="plan-details" aria-label="More from the original plan"><details><summary>Weekly volume estimates</summary><p>Fractional sets per week from the original PDF, before the dip swap. These include indirect work and are estimates.</p><dl className="volume-list">{plan.volume.map(([n,s]) => <div key={n}><dt>{n}</dt><dd>{s} sets</dd></div>)}</dl></details><details><summary>The goal and what changed in v2</summary><p>{plan.goal}</p><ul>{plan.v2.map(s => <li key={s}>{s}</li>)}</ul></details><p className="glossary">{plan.glossary}</p></section>
      <TailoredPlan />
    </main>
    <footer><a href="#top" className="wordmark">OHWISEY<span className="brand-dot" /></a><p>My dip swap is above. The PDF is the original plan.</p><a href="https://github.com/ohwisey/lean-bulk-plan">View on GitHub <ArrowUpRight aria-hidden="true" size={16} /></a></footer>
  </>;
}
