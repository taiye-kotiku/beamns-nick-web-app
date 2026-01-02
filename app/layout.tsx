import './globals.css'

export const metadata = {
  title: 'Evict My Tenant – Alabama',
  description: 'Tenant eviction guidance for Alabama'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
