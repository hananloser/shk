import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '../../../compoents/button';
import { Product } from '../../../store/actions/products/ProductActionTypes';

import InputProduct from './InputProduct';



const FormEdit = ({ toggle, product } : {toggle : () => void , product : Product}) => {
    const { register, handleSubmit, errors } = useForm()
    const handleForm = () => {
        toggle();
    }

    return (
        <>
            <div className="flex item-center justify-center mt-2">
                <span className="text-xl font-semibold">----Edit Product SPBU----</span>
            </div>

            <form onSubmit={handleSubmit(handleForm)}>
                <div className="flex flex-col space-y-3">
                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="name"
                        label="Nama Product"
                        value={product.name}
                    />
                    {errors.name && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.name.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="price_buy"
                        label="Harga beli/L"
                        value={product.price_buy}
                    />
                    {errors.price_buy && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.price_buy.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="price_sell"
                        label="Harga Jual/L"
                        value={product.price_sell}
                    />
                    {errors.price_sell && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.price_sell.message}</p>)}
                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="price_8kl"
                        label="Harga 8KL"
                        value={product.price_8kl}
                    />
                    {errors.price_8kl && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.price_8kl.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="pph"
                        label="PPH"
                        value={product.pph}
                    />
                    {errors.pph && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.pph.message}</p>)}

                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="margin_pokok"
                        label="Margin Pokok"
                        value={product.margin_pokok}
                    />
                    {errors.margin_pokok && (<p className="text-primary whitespace-nowrap pl-60 ">{errors.margin_pokok.message}</p>)}
                    <InputProduct
                        register={register({ required: "Tidak Boleh Kosong" })}
                        name="margin_pph"
                        label="Margin PPH"
                        value={product.margin_pph}
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

export default FormEdit
