import { CopyButton } from '@/components/copy-button';
import { BASE } from '@/lib/plan';
import { tailoredPrompt, reviewPrompt } from '@/lib/tailored-plan';

export function TailoredPlan() {
  return <section id="make-your-own" className="tailored-section" aria-labelledby="tailored-heading">
    <div className="section-title"><p className="eyebrow">YOUR GOAL. YOUR WEEK.</p><h2 id="tailored-heading">Make a plan that fits you.</h2><p>Copy the prompt into Claude or ChatGPT. Fill in what you know and let it ask for what’s missing.</p></div>
    <ol className="tailored-steps">
      <li><strong>Give it your actual week.</strong><p>Your goal, experience, equipment, available days and time per session.</p></li>
      <li><strong>Show it what’s happening.</strong><p>Recent sets and reps, what has stalled, sleep, fatigue and anything that hurts. A wearable is optional.</p></li>
      <li><strong>Try it. Log it. Review it.</strong><p>Ask for a manageable starting block, then use your first two weeks to adjust. A year-long goal still needs check-ins.</p></li>
    </ol>
    <div className="prompt-actions"><CopyButton primary text={tailoredPrompt} label="Copy the starter prompt" /><a className="download-link" href={`${BASE}/make-your-own-plan.txt`} download>Download prompt ↓</a></div>
    <details className="prompt-details"><summary>Read the prompt</summary><pre>{tailoredPrompt}</pre></details>
    <div className="review-prompt"><div><h3>After your first two weeks</h3><p>Bring back your log. Keep what works and change what needs it.</p></div><CopyButton text={reviewPrompt} label="Copy the check-in prompt" /></div>
    <p className="tailored-note">AI can help with the planning. It can’t check your technique in person or assess an injury. Get qualified help for pain, health concerns or movements you’re unsure about.</p>
    <p className="guidance-source">Why personalise it? <a href="https://acsm.org/resistance-training-guidelines-update-2026/">ACSM’s guidance</a> emphasises goals, enjoyment and safety. Use your training log to keep improving the plan.</p>
  </section>;
}
