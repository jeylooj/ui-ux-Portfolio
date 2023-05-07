import './globals.css'

export const metadata = {
  title: 'Shahab',
  description: 'UI/UX Designer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
