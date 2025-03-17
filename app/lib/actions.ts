"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" })

export async function createSales(formData: FormData) {
    const name = formData.get("name");
    await sql`INSERT INTO sales (name) VALUES (${`${name}`})`
    // revalidatePath("/dashboard/sales");
    redirect("/dashboard/sales");
}

export async function deleteSales(id: string) {
    await sql`DELETE FROM sales WHERE id_sales = ${id}`
    revalidatePath("/dashboard/sales");
}