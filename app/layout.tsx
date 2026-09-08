import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Luke’s Lean Bulk Plan | OHWISEY',
  description: 'Copy my workouts, see my starting weights, or get help making a plan for you. Includes the original PDF and messages you can paste into Claude or ChatGPT.',
  metadataBase: new URL('https://ohwisey.github.io/lean-bulk-plan/'),
  alternates: { canonical: 'https://ohwisey.github.io/lean-bulk-plan/' },
  icons: { icon: '/lean-bulk-plan/favicon.svg' },
  openGraph: { title: 'Luke’s Lean Bulk Plan', description: 'Copy my workouts or get help making a plan for you.', url: 'https://ohwisey.github.io/lean-bulk-plan/', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
