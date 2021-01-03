import React, { useEffect } from 'react'
import Header from '../../../compoents/Header/Index'
import Inputs from '../../../compoents/Inputs/Inputs'
import { useRouter } from 'next/router'
import { Button } from '../../../compoents/button'
import { GetStationById, updateStation } from '../../../store/actions/stations/GET_BY_ID/stationByIdAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../store/store'
import { useForm } from 'react-hook-form'
import { Station } from '../../../store/actions/stations/GET_BY_ID/stationGetByIdTypes'
import { withAuth } from '../../../hoc/withAuth'
import { AuthToken } from '../../../services/auth_token'

const Edit = ({ auth }) => {
    const user: AuthToken = auth
    const { handleSubmit, errors, register } = useForm<Station>()
    const dispatch = useDispatch();
    const stationById = useSelector((state: RootStore) => state.station);

    const router = useRouter()
    const { edit } = router.query
    const handleForm = (data) => {
        dispatch(updateStation(edit as any, data))
        router.back();
    }

    useEffect(() => {
        dispatch(GetStationById(edit as any))
    }, [])

    return (
        <div>
            <Header variant='admin' variantUser='admin' variantTitle="admin" title="Halaman Admin" username={user.decodeToken.name} />
            <div className="flex flex-col z-20">
                <div className="mt-10 flex justify-center">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <span className="font-roboto text-2xl font-bold mt-24">Edit SPBU</span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(handleForm)}>
                <div className="flex justify-center px-16 mt-10">
                    <div className="card-add w-full bg-alt py-10 rounded-lg space-y-4">
                        <div className="flex items-center mx-2">
                            <div className="label w-1/6 ml-2">
                                <span className="font-bold">Nama SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full pr-24 flex-grow-0">
                                {stationById.loading ? (<p>Loading ..</p>) : (
                                    <Inputs
                                        defaultValue={stationById.station?.data.name_station}
                                        name="name_station"
                                        placeholder="Masukan Nama"
                                        ref={register({ required: true })}
                                    />
                                )}

                            </div>
                        </div>
                        <div className="flex items-center mx-2 justify-between">
                            <div className="label w-1/6 ml-2">
                                <span className="font-bold">Nomor SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="items-center w-full pr-24 flex-grow-0">
                                {stationById.loading ? (<p>Loading ..</p>) : (
                                    <Inputs
                                        defaultValue={stationById.station?.data.no_station}
                                        name="no_station"
                                        autoComplete="off"
                                        placeholder="Masukan Nomor SPBU"
                                        ref={register({ required: true })}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex items-center mx-2">
                            <div className="label w-1/6 ml-2">
                                <span className="font-bold">Lokasi SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex items-center w-full pr-24">
                                {stationById.loading ? (<p>Loading ..</p>) : (
                                    <Inputs
                                        defaultValue={stationById.station?.data.location}
                                        autoComplete="off"
                                        name="location"
                                        placeholder="Lokasi SPBU"
                                        ref={register({ required: true })}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="flex items-center mx-2">
                            <div className="label w-1/6 ml-2">
                                <span className="font-bold">No. Telpon SPBU</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex w-full pr-24">
                                {stationById.loading ? (<p>Loading ..</p>) : (
                                    <Inputs
                                        defaultValue={stationById.station?.data.phone_number}
                                        name="phone_number"
                                        autoComplete="off"
                                        placeholder="Masukan Lokasi SPBU"
                                        ref={register({ required: true })}
                                    />
                                )}
                                {errors.phone_number && <span className="text-left text-primary mt-2">Field Link Google Tidak Boleh Kosong</span>}
                            </div>
                        </div>
                        <div className="flex items-center mx-2">
                            <div className="label w-1/6 ml-2">
                                <span className="font-bold">Link Google Map</span>
                                <span className="text-primary">*</span>
                            </div>
                            <div className="flex flex-col w-full pr-24">
                                {stationById.loading ? (<p>Loading ..</p>) : (
                                    <Inputs
                                        defaultValue={stationById.station?.data.location_link}
                                        name="location_link"
                                        autoComplete="off"
                                        placeholder="Masukan Lokasi Google Maps"
                                        ref={register}
                                    />
                                )}
                                {errors.location_link && <span className="text-left text-primary mt-2">Field Link Google Tidak Boleh Kosong</span>}
                            </div>
                        </div>
                        <div className="flex ml-2 justify-between pt-3 ">
                            <Button type="button" onClick={() => alert('test')} variant='alternative'>
                                Edit foto
                            </Button>
                            <div className="flex pr-24 space-x-4">
                                <Button type="submit">
                                    Simpan
                                </Button>
                                <Button type="button" onClick={() => router.back()} variant='outline'>
                                    Batalkan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Edit.getInitialProps = async () => {
    return {
        test: '123'
    }
}

export default withAuth(Edit)
