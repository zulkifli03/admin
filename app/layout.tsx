import './globals.css'
import { lusitana } from "@/app/ui/fonts"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${lusitana.className} p-5 md:p-10`}>

        {children}
      </body>
    </html>
  )
}