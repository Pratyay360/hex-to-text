import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hex To Text Converter',
  description: 'Convert hex to text and text to hex.',
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