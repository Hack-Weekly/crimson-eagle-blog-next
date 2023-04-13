import "~/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className="flex min-h-screen items-center justify-center text-center font-manrope">
        {children}
      </div>
      </body>
    </html>
  )
}
