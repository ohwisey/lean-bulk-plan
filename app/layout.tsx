import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Luke’s Lean Bulk Plan | OHWISEY',
  description: 'The original AI workout plan from my four-month lean bulk. Copy the push, pull and legs workouts, nutrition targets and progression rules, or download the PDF.',
  metadataBase: new URL('https://ohwisey.github.io/lean-bulk-plan/'),
  alternates: { canonical: 'https://ohwisey.github.io/lean-bulk-plan/' },
  icons: { icon: '/lean-bulk-plan/favicon.svg' },
  openGraph: { title: 'Luke’s Lean Bulk Plan', description: 'Push. Pull. Legs. Rest. The original plan, ready to copy.', url: 'https://ohwisey.github.io/lean-bulk-plan/', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
