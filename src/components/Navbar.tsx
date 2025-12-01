"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
    const pathname = usePathname();
    const navs = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
    ];
    return (
        <div>
            <ul className="flex my-2">
                {navs.map((item) => {
                    return (
                        <Link
                            className={`mx-3 ${
                                pathname === item.link
                                    ? "text-2xl text-blue-300"
                                    : ""
                            }`}
                            key={item.title}
                            href={item.link}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
