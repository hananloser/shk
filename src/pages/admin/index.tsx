import React from 'react'
import Header from '../../compoents/Header/Index'

const Admin = () => {
    return (
        <div>
            <Header variant='admin' variantUser='admin' variantTitle="admin" title="Halaman Admin" />
            <div className="flex flex-col z-20">
                <div className="mt-28 flex justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <span className="font-roboto text-5xl font-bold mt-24">SELAMAT DATANG ADMIN</span>
                        <span className="font-roboto text-xl font-bold">Halaman Hanya Bisa Di Akses Oleh Admin</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
