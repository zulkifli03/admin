"use client"
import { lusitana } from "@/app/ui/fonts"
import { createSales } from "@/app/lib/actions"
import { useState } from "react"


export default function Form() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <h1 className={`${lusitana.className} text-3xl`}>Create Sales</h1>

            <form action={createSales} onSubmit={() => setLoading(true)} className="flex flex-col ">
                <div className="py-5 flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter sales name.."
                        className="border-2 border-solid border-blue-50 focus:border-sky-500 w-full rounded-lg outline-0 p-2" />
                </div>
                <button disabled={loading} type="submit" className="cursor-pointer self-end text-white text-center bg-blue-500 w-50  font-bold p-3 rounded-lg "
                >{loading == true ? "Loading..." : "Save"}</button>
            </form>
        </>
    )
}