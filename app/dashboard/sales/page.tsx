
import { metadata } from "@/app/layout"
import { lusitana } from "@/app/ui/fonts";
import { List, ListSkelton } from "@/app/ui/sales/list";
import { Suspense } from "react";
import Search from "@/app/ui/search";
import Link from "next/link";

metadata.title = "Sales";


export default async function Page(props: { searchParams?: Promise<{ query?: string }> }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    return (
        <>
            <h1 className={`${lusitana.className} text-3xl`}>Sales</h1>
            <div className="flex py-5 gap-5">
                <Search />
                <Link href="/dashboard/sales/create" className="cursor-pointer text-white text-center bg-blue-500 w-50  font-bold p-3 rounded-lg  justify-between">Create New</Link>
            </div>
            <Suspense fallback={<ListSkelton />} >
                <List query={query} />
            </Suspense>

        </>
    )
}