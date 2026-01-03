import './globals.css';

export const metadata = {
  title: 'Evict My Tenant',
  description: 'Tenant eviction workflow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
