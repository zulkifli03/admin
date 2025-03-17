import { TrashIcon } from "@heroicons/react/24/outline"
import { deleteSales } from "@/app/lib/actions"


export function ButtonDelete({ id }: { id: string }) {
    const deleteSalesById = deleteSales.bind(null, id);
    return (
        <>
            <form action={deleteSalesById}>
                <button type="submit">
                    <TrashIcon className="w-5 hover:text-sky-500 cursor-pointer" />
                </button>
            </form>
        </>

    )
}