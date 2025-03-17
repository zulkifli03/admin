"use client"
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
export default function Search() {
    const searchParams = useSearchParams();
    const path = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback(function (term: string) {

        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${path}?${params}`);
    }, 300)
    return (
        <>
            <input
                placeholder="Search by sales name"
                defaultValue={searchParams?.get("query")?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                className="border-2 border-solid border-blue-50 focus:border-sky-500 w-full rounded-lg outline-0 p-2" />
        </>
    )
}