import './globals.css'

export const metadata = {
  title: '4HISGLORY',
  description: 'Faith • Purpose • Impact',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}