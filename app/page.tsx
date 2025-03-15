import Image from "next/image";
import { ArrowRightIcon, ChartPieIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { inter } from '@/app/ui/fonts'
export default function Home() {

  return (
    <>
      <header className="flex items-center bg-blue-500 text-white p-5 md:pt-30 rounded-lg">
        <ChartPieIcon className="w-10 md:w-20 md:h-20 " />
        <h1 className="text-2xl md:text-[48px] ml-4">Handmade Haven</h1>
      </header>
      <main className="flex items-center justify-between flex-col md:flex-row">
        <section className="w-full md:w-3xl md:pl-30 mt-10 md:mt-0">
          <p className="text-xl md:text-4xl"><b>Welcome to the Handmade Haven </b>
            Dashboard! Easily manage and monitor all your sales activities.
          </p>
          <Link
            href="/login"
            className={`${inter.className} text-white bg-blue-500 text-xl md:text-2xl flex font-bold p-3 md:p-5 rounded-lg w-30 md:w-43 mt-10 md:mt-22 justify-between`}
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </section>
        <section>
          <Image src={"/admin.jpeg"} width={500} height={500} alt="Admin Vector" />

        </section>
      </main>

    </>
  );
}
