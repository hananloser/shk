import React, { FormEvent, useEffect, useState } from 'react'
import CardSpbu from '../../compoents/CardSpbu'
import Header from '../../compoents/Header/Index'
import Modal from '../../compoents/Modal'
import Input from '../auth/component/Input/Input'
import router from 'next/router'
import useDebounce from '../../lib/debaunce'
import Skleton from 'react-loading-skeleton'
import { Button } from '../../compoents/button'
import { useDispatch, useSelector } from 'react-redux'
import { GetStation } from '../../store/actions/stations/GET/StationAction'
import { RootStore } from '../../store/store'
import { withAuth } from '../../hoc/withAuth'
import { AuthToken } from '../../services/auth_token'
import { useModal } from '../../providers/ModalProvider'
import { deleteStation } from '../../store/actions/stations/GET_BY_ID/stationByIdAction'

const Admin = ({ auth }) => {
    const dispatch = useDispatch();
    const stationState = useSelector((state: RootStore) => state.stations);
    const deletedStation = useSelector((state: RootStore) => state.station);
    const [keyword, setKeyword] = useState<string>();
    const debouncedSearchTerm = useDebounce(keyword, 500);

    const imageUrl = 'https://images.unsplash.com/photo-1609287873146-a72edea964b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'

    const user: AuthToken = auth

    const { modal, setModal } = useModal()

    const [id, setId] = useState<string>()

    const passingId = (stationId) => {
        setId(stationId)
    }

    const handleDeleteStation = (stationId: string) => {
        dispatch(deleteStation(stationId))
        setModal(!modal)
    }

    /**
     * Buat state untuk tampung id yang akan di hapus 
     * Buat Callback 
     * Accept Data nya di modal
     */

    useEffect(() => {
        dispatch(GetStation(debouncedSearchTerm))
    }, [debouncedSearchTerm, deletedStation.deleted])

    return (
        <div>
            <Header variant='admin' variantUser='admin' variantTitle="admin" title="Halaman Admin" username={user.decodeToken.name.toUpperCase()} />
            <div className="flex flex-col z-20">
                <div className="mt-28 flex justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <h1 className="font-roboto text-2xl font-bold mt-24">SELAMAT DATANG  {user.decodeToken.name.toUpperCase()} </h1>
                        <span className="font-roboto text-xl font-bold ">Halaman hanya bisa di akses admin</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-3 mt-20 px-4">
                <Input name="search" placeholder="Cari SPBU" variant='widest' onChange={(e: FormEvent<HTMLInputElement>) => setKeyword(e.currentTarget.value)} />
                <Button type="button" onClick={() => router.push('admin/create')} size='small'>
                    Tambah
                </Button>
            </div>
            {/* Content */}
            <div className="flex justify-center mb-16 mt-16">
                <div className="grid grid-flow-row grid-cols-1 grid-rows-2 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7  md:gap-7 ">
                    {!stationState.loading && stationState.stations?.data.map(item => (
                        <CardSpbu station={item} key={item.id} name={item.name_station} image={imageUrl} handleId={passingId}  />
                    ))}
                </div>
            </div>
            {/* Loading State */}
            {stationState.loading && (
                <div className="grid grid-flow-row grid-cols-1 grid-rows-2 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7  md:gap-7 px-12">
                    <Loading />
                </div>
            )}
            {/* Modal */}
            <Modal>
                <div className="p-2">
                    <div className="flex flex-col item-center justify-center space-y-4 h-44">
                        <span className="text-4xl font-bold">Apa Anda Yakin ?</span>
                        <div className="flex space-x-4 justify-center items-center">
                            <Button type="button" onClick={() => handleDeleteStation(id as any)} size='small'>
                                Hapus
                            </Button>
                            <Button type="button" onClick={() => setModal(!modal)} size='small' variant="outline">
                                Batal
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export const Loading = () => {
    return (
        <>
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
            <Skleton height={240} width={'100%'} />
        </>
    );
}

export default withAuth(Admin)
