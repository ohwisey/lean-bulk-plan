import plan from '../plan.json' with { type: 'json' };
export const BASE = '/lean-bulk-plan';
export { plan };
export type Day = (typeof plan.days)[number];
export function dayText(day: Day) {
  return `${day.name.toUpperCase()} — ${day.focus}\nMy original starting weights; choose your own loads.\n\n${day.exercises.map(e => `${e.name}${'optional' in e && e.optional ? ' (optional)' : ''}${'core' in e && e.core ? ' (core)' : ''}\n${e.sets} × ${e.reps} | Rest: ${e.rest} | My start: ${e.start}`).join('\n\n')}`;
}
export function fullPlanText() {
  return [plan.title.toUpperCase(), plan.version, plan.intro, plan.split, ...plan.days.map(dayText), `REST\n${plan.rest}`, `HOW TO PROGRESS\n${plan.progression.map(s => `• ${s}`).join('\n')}`, `RECOVERY\n${plan.recovery.map(s => `• ${s}`).join('\n')}`, `MY NUTRITION TARGETS\n${plan.nutrition.map(n => `${n.day}: ${n.calories} kcal | Protein ${n.protein} | Carbs ${n.carbs} | Fat ${n.fat}`).join('\n')}\n\n${plan.nutritionNotes.map(s => `• ${s}`).join('\n')}`, `WEEKLY VOLUME ESTIMATES FROM THE ORIGINAL PLAN\n${plan.volume.map(([n,s]) => `${n}: ${s} sets/week`).join('\n')}\nThese are the PDF's fractional-set estimates, including indirect work.`, `THE ORIGINAL GOAL\n${plan.goal}`, `WHAT CHANGED IN V2\n${plan.v2.map(s => `• ${s}`).join('\n')}`, plan.glossary, 'Source: Luke LeanBulk Training Plan v2.pdf\nhttps://ohwisey.github.io/lean-bulk-plan/'].join('\n\n');
}
