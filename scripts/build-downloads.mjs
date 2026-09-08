import { writeFile } from 'node:fs/promises';
import { fullPlanText } from '../lib/plan.ts';
import { tailoredPrompt, reviewPrompt } from '../lib/tailored-plan.ts';
await writeFile(new URL('../public/plan.txt', import.meta.url), fullPlanText() + '\n');
await writeFile(new URL('../PLAN.md', import.meta.url), '# ' + fullPlanText() + '\n');
await writeFile(new URL('../public/make-your-own-plan.txt', import.meta.url), tailoredPrompt + '\n\nAFTER TWO WEEKS\n\n' + reviewPrompt + '\n');
console.log('Prepared copyable plan and text download.');
