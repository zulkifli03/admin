import { metadata } from "@/app/layout"
import { lusitana } from "@/app/ui/fonts";
metadata.title = "Inventory";

export default function Page() {
    return (
        <h1 className={`${lusitana.className}`}>Inventory</h1>
    )
}