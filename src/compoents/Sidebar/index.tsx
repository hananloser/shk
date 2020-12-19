import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
    const menu = [
        { name: "Dashboard", path: '/dashboard' },
        { name: "Produk", path: '/product' },
        { name: "Laporan Harian", path: '/laporan' },
        { name: "Stok Minyak", path: '/stok-minyak' },
        { name: "Kas Besar", path: "/kas" },
        { name: "Buku Bank", path: "/buku_bank" },
        { name: "Penjualan", path: "/selling" },
        { name: "Pengeluaran", path: "/pengeluaran" },
        { name: "Daftar Piutang", path: "/piutang" },
        { name: "Laba Rugi", path: "/laba-rugi" },
        { name: "Neraca", path: "/neraca" },
    ]
    return (
        <div className="hidden md:flex flex-col bg-primary fixed  h-screen  w-80">
            <div className="relative top-5 left-20  ">
                <span className="font-bold text-5xl text-white">Logo</span>
            </div>
            <div className="flex top-48 left-8 relative">
                <ul className="text-white font-bold text-xl space-y-3">
                    {menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <a><li key={index} className="hover:text-blue-300 cursor-pointer">{item.name}</li></a>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
