import "./globals.css";

export const metadata = {
  title: "Evict My Tenant Alabama",
  description: "Alabama eviction filing platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
