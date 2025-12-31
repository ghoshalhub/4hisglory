import './globals.css'

export const metadata = {
  title: '4HISGLORY - Faith • Purpose • Impact',
  description: 'A Christ-centered brand inspiring people to walk in faith, purpose, and love through jewelry, entertainment, and community outreach.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}