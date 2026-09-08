import plan from '../plan.json' with { type: 'json' };
export const BASE = '/lean-bulk-plan';
export { plan };
export type Day = (typeof plan.days)[number];
export function dayText(day: Day) {
  return `${day.name.toUpperCase()} — ${day.focus}\nMy starting weights while I worked on form. Pick weights you can control.\n\n${day.exercises.map(e => `${e.name}${'optional' in e && e.optional ? ' (optional)' : ''}${'core' in e && e.core ? ' (abs)' : ''}\n${'prescription' in e ? `Sets/reps: ${e.prescription}` : `${e.sets} × ${e.reps}`} | Rest: ${e.rest} | Starting weight: ${e.start}${'note' in e ? `\n${e.note}` : ''}`).join('\n\n')}`;
}
export function fullPlanText() {
  return [plan.title.toUpperCase(), plan.version, plan.intro, plan.split, '4 × 5–8 means 4 sets of 5 to 8 reps. Rest is the break between sets.', ...plan.days.map(dayText), `REST\n${plan.rest}`, `HOW TO GET STRONGER\n${plan.progression.map(s => `• ${s}`).join('\n')}\n\n${plan.progressExample}`, `WHEN YOU'RE WORN OUT\n${plan.recovery.map(s => `• ${s}`).join('\n')}`, `MY FOOD TARGETS\n${plan.nutrition.map(n => `${n.day}: ${n.calories} calories | Protein ${n.protein} | Carbs ${n.carbs} | Fat ${n.fat}`).join('\n')}\n\n${plan.nutritionNotes.map(s => `• ${s}`).join('\n')}`, `SETS PER MUSCLE EACH WEEK\n${plan.volume.map(([n,s]) => `${n}: ${s} sets/week`).join('\n')}\nEstimates from the original PDF, before the dip swap. These also count some work from other lifts.`, `MY ORIGINAL GOAL\n${plan.goal}`, `CHANGES TO THE OLD PLAN\n${plan.v2.map(s => `• ${s}`).join('\n')}`, plan.glossary, 'Original PDF: Luke LeanBulk Training Plan v2.pdf\nhttps://ohwisey.github.io/lean-bulk-plan/'].join('\n\n');
}
