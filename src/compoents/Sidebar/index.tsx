import React from 'react'
import Link from 'next/link'
import MemoDashboard from '../../assets/icons/Dashboard'
const Sidebar = () => {
    const menu = [
        { name: "Produk", path: '/product' },
        { name: "Laporan Harian", path: '/report' },
        { name: "Stok Minyak", path: '/stock' },
        { name: "Kas Besar", path: "/kas" },
        { name: "Buku Bank", path: "/buku_bank" },
        { name: "Penjualan", path: "/selling" },
        { name: "Pengeluaran", path: "/pengeluaran" },
        { name: "Daftar Piutang", path: "/piutang" },
        { name: "Laba Rugi", path: "/laba-rugi" },
        { name: "Neraca", path: "/neraca" },
    ]
    return (
        <div className="hidden md:flex flex-col bg-secondry fixed h-screen w-80 px-2 mt-24">
            <div className="flex item-center dashboard-logo mx-auto mt-5 text-white bg-primary font-roboto font-bold w-full px-4 py-3 rounded-lg ">
                <MemoDashboard className="text-2xl mt-1 mx-2" />
                <span className="tracking text-2xl rounded-2xl">Dashboard</span>
            </div>
            <div className="line bg-white h-0.5 mt-3"></div>
            <div className="item-menu">
                {menu.map((item, index) => (
                    <ul key={index} className="text-white font-bold mx-auto my-5 ml-5 tracking-wide font-roboto">
                        <Link href={item.path}>
                            <a>{item.name}</a>
                        </Link>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
