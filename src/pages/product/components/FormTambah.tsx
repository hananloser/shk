import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button } from '../../../compoents/button'
import { GetProducts, StoreProducts } from '../../../store/actions/products/ProductAction'
import InputProduct from './InputProduct'


const FormTambah = ({ toggle }) => {
    const { register, handleSubmit, errors } = useForm()
    const dispatch = useDispatch();
    const router = useRouter();
    const station_id = router.query.station as string;

    const handleForm = async (data) => {
        await dispatch(StoreProducts(station_id, data));
        await dispatch(GetProducts(station_id))
        toggle();
    }
    return (
        <>
            <div className="flex item-center justify-center mt-2">
                <span className="text-xl font-semibold">----Tambah Product SPBU----</span>
            </div>

            <form onSubmit={handleSubmit(handleForm)}>
                <div className="flex flex-col space-y-3">
                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="name"
                        label="Nama Product"
                    />
                    {errors.name && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.name.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="price_buy"
                        label="Harga beli/L"
                    />
                    {errors.price_buy && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.price_buy.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="price_sell"
                        label="Harga Jual/L"
                    />
                    {errors.price_sell && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.price_sell.message}</p>)}
                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="price_8kl"
                        label="Harga 8KL"
                    />
                    {errors.price_8kl && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.price_8kl.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="pph"
                        label="PPH"
                    />
                    {errors.pph && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.pph.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="margin_pokok"
                        label="Margin Pokok"
                    />
                    {errors.margin_pokok && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.margin_pokok.message}</p>)}
                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="margin_pph"
                        label="Margin PPH"
                    />
                    {errors.margin_pph && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.margin_pph.message}</p>)}
                    <div className="flex justify-end pr-28 mt-24 space-x-3">
                        <Button type='submit' variant='primary'>Simpan</Button>
                        <Button type='submit' variant='outline' onClick={toggle}>Batal</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormTambah
