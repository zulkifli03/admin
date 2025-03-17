import { fetchSales } from "@/app/lib/data";
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { ButtonDelete } from "@/app/ui/sales/buttons";
export function ListSkelton() {
    return (
        <>
            <ul className="border-2 border-blue-50 p-5 rounded-lg">

                <li className="flex justify-between p-5">
                    <p className="p-5 w-1/2 rounded bg-gray-300 animate-pulse"></p>
                </li>
                <li className="flex justify-between p-5">
                    <p className="p-5 w-1/2 rounded bg-gray-300 animate-pulse"></p>
                </li>
                <li className="flex justify-between p-5">
                    <p className="p-5 w-1/3 rounded bg-gray-300 animate-pulse"></p>
                </li>
                <li className="flex justify-between p-5">
                    <p className="p-5 w-1/2 rounded bg-gray-300 animate-pulse"></p>
                </li>
                <li className="flex justify-between p-5">
                    <p className="p-5 w-1/5 rounded bg-gray-300 animate-pulse"></p>
                </li>

            </ul>
        </>
    )
}


export async function List({ query }: { query: string }) {
    const sales = await fetchSales({ query });
    return (
        <>
            <ul className="border-2 border-blue-50 p-5 rounded-lg">
                {sales?.map((item) => (
                    <li key={item.id_sales} className="flex justify-between p-5">
                        <p>{item.name}</p>
                        <span className="flex gap-5">
                            <Link href=""><PencilIcon className="w-5 hover:text-sky-500" /></Link>
                            <ButtonDelete id={item.id_sales} />
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );

}