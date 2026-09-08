# Luke’s lean bulk plan

[Open the plan](https://ohwisey.github.io/lean-bulk-plan/) · [Copy the text](PLAN.md) · [Download the original PDF](public/luke-lean-bulk-v2.pdf)

The AI workout plan from my four-month lean bulk video. Push, pull, legs, rest, then repeat. The web version puts my weighted-dip substitution first on Push, replacing rope pushdowns.

On the page you can copy the full plan or one workout, see the starting loads, sets, reps and rest times, and download the original PDF. The plan includes nutrition targets, progression and recovery notes. [Make your own](https://ohwisey.github.io/lean-bulk-plan/#make-your-own) has a copyable starter prompt and a two-week review prompt for Claude or ChatGPT.

The listed weights were my starting point while focusing on form. Use your own loads and adjust food to your needs. The original PDF is unchanged. The starting dip prescription is marked as not recorded; the later check-in's +10 kg belt load is identified separately.

Feel free to copy and adapt the plan for your own training.

## Source

`Luke LeanBulk Training Plan v2.pdf` supplied by Luke. The exercise tables and nutrition targets are transcribed from it, with Luke's requested dip substitution on the web page. Supporting notes are shortened for readability; the original PDF is included unchanged. Weekly volume numbers are the original plan’s estimates before the swap, not a new calculation. The personalisation prompts are new supporting material, informed by [ACSM's 2026 guidance](https://acsm.org/resistance-training-guidelines-update-2026/); they are not a clinical assessment or a claim that AI replaces all coaching.

## Update the page

Built with React and Vinext, exported as a static GitHub Pages site. No account or sign-in is needed to read or copy the plan.

1. Use Node.js 22.18+ or newer and run `npm ci`.
2. Edit `plan.json` for the plan, `app/page.tsx` for layout and `app/globals.css` for styles.
3. Run `npm run build`. This regenerates the text downloads and the `docs/` publishing folder.
4. Commit and push the source changes and `docs/` to `main`.

GitHub Pages uses `main` → `/docs`. Assets and download links use the `/lean-bulk-plan` prefix.
