'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { } from "react";

const links = [
    { link: '/dashboard', icons: '🏠', name: 'Painel' },
    { link: '/dashboard/clientes', icons: '👥', name: 'Clientes' },
    { link: '/dashboard/contratos', icons: '📄', name: 'Contratos' },
    { link: '/dashboard/settings', icons: '📄', name: 'settings' },
]

export default function SiderBar() {

    const pathname = usePathname();

    return (
        <aside className="w-60 h-lvh bg-[#f8f9fd] p-4 flex flex-col gap-2 text-sm font-medium text-gray-500">
            {links.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                    <Link
                        key={index}
                        href={item.link}
                        className={`flex items-center gap-3 px-4 py-2 transition 
                          ${isActive
                                ? 'bg-white text-blue-600 border-r-4 border-blue-500 shadow-sm font-semibold'
                                : 'hover:bg-gray-100 text-gray-500'
                            }`}
                    >
                        <span className="text-xl">{item.icons}</span>
                        <span className="tracking-wide">{item.name}</span>
                    </Link>
                );
            })}
        </aside>
    )
}