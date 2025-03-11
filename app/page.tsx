import Image from "next/image";
import { ChartPieIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
export default function Home() {
  return (
    <>
      <header className="flex items-center bg-blue-500 text-white p-5 rounded-lg">
        <ChartPieIcon className="w-20 h-20" />
        <h1 className={`text-[48px] ml-4 ${lusitana.className}`}>Handmade Haven</h1>
      </header>
    </>
  );
}
