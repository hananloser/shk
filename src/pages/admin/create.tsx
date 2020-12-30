import React from 'react'
import { Button } from '../../compoents/button'
import Header from '../../compoents/Header/Index'
import Inputs from '../../compoents/Inputs/Inputs'

const Create = () => {
    return (
        <div>
            <Header variant='admin' variantUser='admin' variantTitle="admin" title="Halaman Admin" />
            <div className="flex flex-col z-20">
                <div className="mt-10 flex justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <span className="font-roboto text-2xl font-bold mt-24">TAMBAH SPBU</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-16 mt-10">
                <div className="card-add w-full bg-alt py-10 rounded-lg space-y-4">
                    <div className="flex items-center mx-2">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">Username</span>
                            <span className="text-primary">*</span>
                        </div>
                        <div className="flex items-center w-full pr-24 flex-grow-0">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2 justify-between">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">Password</span>
                            <span className="text-primary">*</span>
                        </div>
                        <div className="items-center w-full pr-24 flex-grow-0">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">Nama SPBU</span>
                            <span className="text-primary">*</span>
                        </div>
                        <div className="flex items-center w-full pr-24">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">Nomor SPBU</span>
                            <span className="text-primary">*</span>
                        </div>
                        <div className="flex items-center w-full pr-24">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">Lokasi SPBU</span>
                            <span className="text-primary">*</span>
                        </div>
                        <div className="flex items-center w-full pr-24">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold ">Username</span>
                            <span className="text-primary">*</span>
                        </div>
                        <div className="flex items-center w-full pr-24">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2 flex-shrink-0">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">No. Telpon SPBU</span>
                        </div>
                        <div className="flex items-center w-full pr-24">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex items-center mx-2">
                        <div className="label w-1/6 ml-2">
                            <span className="font-bold">Link Google Map</span>
                        </div>
                        <div className="flex items-center w-full pr-24">
                            <Inputs />
                        </div>
                    </div>
                    <div className="flex ml-2 justify-between pt-3 ">
                        <Button type="button" onClick={() => alert('test')} variant='alternative'>
                            Tambahkan foto
                        </Button>
                        <div className="flex pr-24 space-x-4">
                            <Button type="button" onClick={() => alert('test')}>
                                Simpan
                            </Button>
                            <Button type="button" onClick={() => alert('test')} variant='outline'>
                                Batalkan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
