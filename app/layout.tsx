import './globals.css'
import { lusitana } from "@/app/ui/fonts"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashoard Handmade Haven"
}
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${lusitana.className} p-5 md:p-5 antialiased h-screen`}>
        {children}
      </body>
    </html>
  )
}