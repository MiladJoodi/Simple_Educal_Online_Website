"use client"
import Image from "next/image";
import Logo from '../../public/images/logo-black.png'
import { HiViewGrid } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { LinkData } from "@/lib/dummydata";
import Link from "next/link";
import { useState } from "react";


const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full ">
            <div className="container flex justify-between items-center">

                {/* Header Logo Left */}
                <div className="logo flex items-center gap-6">
                    <Image
                        src={Logo}
                        alt="logo"
                        className="h-5 w-20"
                    />

                    <div className="flex items-center justify-center gap-1">
                        <HiViewGrid size={20} />
                        <span>Category</span>
                    </div>
                </div>

                {/* Header Nav Center */}
                <nav className={open ? "mobile-view" : "desktop-view"}>
                    <ul className="flex items-center gap-6">
                        {LinkData.map((link, index)=>(
                            <li key={index}>
                                <Link 
                                href={link.url}
                                className={({isActive})=> isActive ? "text-primary text-sm" : "text-[15px]"}
                                
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Header Basket Right */}
                <div>
                    <button className="">
                        <BiShoppingBag size={25} />
                    </button>
                    <button>Login</button>
                </div>


            </div>
        </header>
    );
}

export default Header;