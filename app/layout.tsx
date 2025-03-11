import './globals.css'
import { inter } from "@/app/ui/fonts"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${inter.className} p-5`}>

        {children}
      </body>
    </html>
  )
}