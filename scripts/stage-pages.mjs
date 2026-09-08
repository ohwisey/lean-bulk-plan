import { access, cp, mkdir, rm, writeFile } from 'node:fs/promises';
const from = new URL('../dist/client/', import.meta.url);
const to = new URL('../docs/', import.meta.url);
await access(new URL('index.html', from));
await rm(to, {recursive:true,force:true});
await mkdir(to, {recursive:true});
await cp(from, to, {recursive:true});
// GitHub serves docs/ at /lean-bulk-plan/ already.
await cp(new URL('lean-bulk-plan/_next/', to), new URL('_next/', to), {recursive:true});
await rm(new URL('lean-bulk-plan/', to), {recursive:true,force:true});
await writeFile(new URL('.nojekyll', to), '');
console.log('GitHub Pages files are ready in docs/.');
