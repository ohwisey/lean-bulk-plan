import { writeFile } from 'node:fs/promises';
import { fullPlanText } from '../lib/plan.ts';
await writeFile(new URL('../public/plan.txt', import.meta.url), fullPlanText() + '\n');
await writeFile(new URL('../PLAN.md', import.meta.url), '# ' + fullPlanText() + '\n');
console.log('Prepared copyable plan and text download.');
