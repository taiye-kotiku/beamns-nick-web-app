import "./globals.css";

export const metadata = {
  title: "Evict My Tenant – Alabama",
  description: "Fast eviction document generation for Alabama landlords",
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
