import postgres from 'postgres';
import { Sales } from './definition';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchSales({ query }: { query: string }) {
    try {
        const data = await sql<Sales[]>`SELECT * FROM sales WHERE name LIKE ${`%${query}%`}`;
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}