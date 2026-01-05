import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Evict My Tenant',
  description: 'Alabama eviction filing workflow',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
