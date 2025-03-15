"use client"
import { ChartPieIcon, HomeIcon, DocumentDuplicateIcon, CubeIcon, BuildingStorefrontIcon, TruckIcon, PowerIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";

import Link from "next/link";


export default function SideNav() {
    const path = usePathname();

    return (
        <nav className="relative md:min-h-full md:w-sm flex flex-col justify-between ">
            <div>
                <header className="bg-blue-500 p-5 md:pr-0 md:pt-0 md:h-32 rounded-lg text-white flex items-end mb-2">
                    <ChartPieIcon className="w-10 md:w-10 md:h-10 " />
                    <h1 className={` ${lusitana.className} text-xl md:text-3xl `}>Handmade Haven</h1>
                </header>
                <div className="flex md:flex-col justify-between md:gap-2">
                    <Link href="/dashboard" className={`${path == "/dashboard" ? 'bg-blue-200 text-blue-500' : 'bg-blue-50'} transition-all duration-300 rounded-lg  flex items-center p-5 font-medium`} >
                        <HomeIcon className="w-5 h-5  md:md:mr-5" />
                        <p className="hidden md:block">Home</p>
                    </Link>
                    <Link href="/dashboard/orders" className={`${path == "/dashboard/orders" ? 'bg-blue-200 text-blue-500' : 'bg-blue-50'} transition-all duration-300 rounded-lg  flex items-center p-5 font-medium`} >
                        <DocumentDuplicateIcon className="w-5 h-5  md:mr-5" />
                        <p className="hidden md:block">Orders</p>
                    </Link>
                    <Link href="/dashboard/inventory" className={`${path == "/dashboard/inventory" ? 'bg-blue-200 text-blue-500' : 'bg-blue-50'} transition-all duration-300 rounded-lg  flex items-center p-5 font-medium`} >
                        <CubeIcon className="w-5 h-5  md:mr-5" />
                        <p className="hidden md:block">Inventory</p>
                    </Link>
                    <Link href="/dashboard/stores" className={`${path == "/dashboard/stores" ? 'bg-blue-200 text-blue-500' : 'bg-blue-50'} transition-all duration-300 rounded-lg  flex items-center p-5 font-medium`} >
                        <BuildingStorefrontIcon className="w-5 h-5  md:mr-5" />
                        <p className="hidden md:block">Stores</p>
                    </Link>
                    <Link href="/dashboard/sales" className={`${path == "/dashboard/sales" ? 'bg-blue-200 text-blue-500' : 'bg-blue-50'} transition-all duration-300 rounded-lg  flex items-center p-5 font-medium`} >
                        <TruckIcon className="w-5 h-5  md:mr-5" />
                        <p className="hidden md:block">Sales</p>
                    </Link>
                </div>

            </div>
            <Link href="/dashboard/logout" className="absolute md:static text-white md:text-black top-2.5 right-0 md:bg-blue-50 rounded-lg flex items-center p-5 font-medium  " >
                <PowerIcon className="w-5 h-5  md:mr-5" />
                <p className="hidden md:block">Sign Out</p>
            </Link>
        </nav>
    )
}