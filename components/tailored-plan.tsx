import { CopyButton } from '@/components/copy-button';
import { BASE } from '@/lib/plan';
import { tailoredPrompt, reviewPrompt } from '@/lib/tailored-plan';

export function TailoredPlan() {
  return <section id="make-your-own" className="tailored-section" aria-labelledby="tailored-heading">
    <div className="section-title"><h2 id="tailored-heading">Make your own plan</h2></div>
    <ol className="tailored-steps">
      <li><strong>Copy the message.</strong><p>Paste it into Claude or ChatGPT.</p></li>
      <li><strong>Answer its questions.</strong><p>Your goal, training days, equipment and current workouts.</p></li>
      <li><strong>Save your workouts.</strong><p>Keep them in your notes. Ask for changes if they don’t fit your week.</p></li>
    </ol>
    <div className="prompt-actions"><CopyButton primary text={tailoredPrompt} label="Copy message" /><a className="download-link" href={`${BASE}/make-your-own-plan.txt`} download>Save as text ↓</a></div>
    <details className="prompt-details"><summary>Read the message</summary><pre>{tailoredPrompt}</pre></details>
    <div className="review-prompt"><div><h3>After two weeks</h3><p>Send it your workout notes. Tell it what felt easy, hard or took too long.</p></div><CopyButton text={reviewPrompt} label="Copy follow-up" /></div>
    <p className="tailored-note">For form help, ask a qualified trainer. For pain or injuries, get medical advice.</p>
    <p className="guidance-source"><a href="https://acsm.org/resistance-training-guidelines-update-2026/">ACSM’s training guide</a></p>
  </section>;
}
