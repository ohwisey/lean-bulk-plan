'use client';
import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function CopyButton({ text, label, primary = false }: { text: string; label: string; primary?: boolean }) {
  const [state, setState] = useState<'idle' | 'copied' | 'manual'>('idle');
  const field = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (state === 'manual') { field.current?.focus(); field.current?.select(); }
    if (state === 'copied') { const timer = setTimeout(() => setState('idle'), 2500); return () => clearTimeout(timer); }
  }, [state]);
  async function copy() {
    try { await navigator.clipboard.writeText(text); setState('copied'); }
    catch { setState('manual'); }
  }
  return <div className={`copy-control ${primary ? 'primary-copy' : ''}`}>
    <Button className="copy-button" variant={primary ? 'default' : 'outline'} onClick={copy} aria-label={state === 'copied' ? `${label}: copied` : label}>
      {state === 'copied' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}{state === 'copied' ? 'Copied' : label}
    </Button>
    <output className="sr-only" aria-live="polite">{state === 'copied' ? `${label}: copied to clipboard.` : ''}</output>
    {state === 'manual' && <div className="manual-copy"><label>Copy this text<textarea ref={field} readOnly value={text} rows={6} /></label><Button variant="ghost" onClick={() => setState('idle')}>Close</Button></div>}
  </div>;
}
