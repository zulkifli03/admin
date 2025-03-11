import { inter } from "@/app/ui/fonts"
import { metadata } from "@/app/layout"
import SideNav from "../ui/dashboard/sidenav";

metadata.title = "Dashboard";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <article className={`${inter.className} h-full flex flex-col md:flex-row text-base`}>
            <SideNav />
            <main className="mt-10 md:px-5 md:mt-0 w-full h-full overflow-y-auto">

                {children}

            </main>
        </article>
    )
}