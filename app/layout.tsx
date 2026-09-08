import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Luke’s Lean Bulk Plan | OHWISEY',
  description: 'My AI workout plan from four months of lean bulking. Copy the routine and starting weights, download the original PDF, or use the prompts to build your own plan.',
  metadataBase: new URL('https://ohwisey.github.io/lean-bulk-plan/'),
  alternates: { canonical: 'https://ohwisey.github.io/lean-bulk-plan/' },
  icons: { icon: '/lean-bulk-plan/favicon.svg' },
  openGraph: { title: 'Luke’s Lean Bulk Plan', description: 'Copy my routine or use the prompts to make a plan that fits your week.', url: 'https://ohwisey.github.io/lean-bulk-plan/', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
