import React from 'react'


const Sidebar = () => {
    const menu = [
        { name: "Dashboard"},
        { name: "Produk" },
        { name: "Laporan Harian" },
        { name: "Stok Minyak" },
        { name: "Kas Besar" },
        { name: "Buku Bank" },
        { name: "Penjualan" },
        { name: "Pengeluaran" },
        { name: "Daftar Piutang" },
        { name: "Laba Rugi" },
        { name: "Neraca" },
    ]
    return (
        <div className="hidden md:flex flex-col bg-primary absolute h-screen  w-80">
            <div className="relative top-5 left-20  ">
                <span className="font-bold text-5xl text-white">Logo</span>
            </div>
            <div className="flex top-48 left-8 relative">
                <ul className="text-white font-bold text-xl space-y-3">
                    {menu.map((item, index) => (
                        <li key={index} className="hover:text-blue-300 cursor-pointer">{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
