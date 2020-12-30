import React from 'react'
import { Button } from '../../compoents/button'
import CardSpbu from '../../compoents/CardSpbu'
import Header from '../../compoents/Header/Index'
import Input from '../auth/component/Input/Input'

const Admin = () => {
    return (
        <div>
            <Header variant='admin' variantUser='admin' variantTitle="admin" title="Halaman Admin" />
            <div className="flex flex-col z-20">
                <div className="mt-28 flex justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <span className="font-roboto text-2xl font-bold mt-24">SELAMAT DATANG ADMIN</span>
                        <span className="font-roboto text-xl font-bold">Halaman hanya bisa di akses admin</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-3 mt-20 px-4">
                <Input name="search" placeholder="Cari SPBU" variant='widest' />
                <Button type="button" onClick={() => alert('test')} size='small'>
                    Tambah
                </Button>
            </div>
            <div className="flex justify-center mb-16 mt-16">
                <div className="grid grid-flow-row grid-cols-1 grid-rows-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                    <CardSpbu name="SPBU A" image="https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
            </div>
        </div>
    )
}

export default Admin
