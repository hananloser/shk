import React from 'react'
import { Button } from '../button'
import { Thead, TheadWrapper } from './Thead'
import { TbodyContentWrapper, Tbody } from './Tbody'

const Table = ({ }) => {
    return (
        <>
            <div className="flex justify-end  px-24 py-2">
                <Button variant='primary' textVariant='bold' size='xlarge' type='button' onClick={() => alert('test')}>
                    Tambah
               </Button>
            </div>
            <div className="px-24 py-4 flex  justify-center">
                <table className='w-full text-md  shadow-md rounded-lg mb-4' >
                    <tbody>
                        <TheadWrapper>
                            <Thead name="Nama Produk" />
                            <Thead name="Harga 8/KL" />
                            <Thead name="Harga Beli /L" />
                            <Thead name="Harga Jual /l" />
                        </TheadWrapper>
                        <TbodyContentWrapper>
                            <Tbody value="Premium" />
                            <Tbody value=" Rp 45.000.000" />
                            <Tbody value=" Rp 6.000" />
                            <Tbody value=" Rp 6.450" />
                        </TbodyContentWrapper>
                        <TbodyContentWrapper>
                            <Tbody value="Partamax" />
                            <Tbody value=" Rp 45.000.000" />
                            <Tbody value=" Rp 6.000" />
                            <Tbody value=" Rp 6.450" />
                        </TbodyContentWrapper>
                        <TbodyContentWrapper>
                            <Tbody value="Solar" />
                            <Tbody value=" Rp 45.000.000" />
                            <Tbody value=" Rp 6.000" />
                            <Tbody value=" Rp 6.450" />
                        </TbodyContentWrapper>
                        <TbodyContentWrapper>
                            <Tbody value="Dexlite" />
                            <Tbody value=" Rp 45.000.000" />
                            <Tbody value=" Rp 6.000" />
                            <Tbody value=" Rp 6.450" />
                        </TbodyContentWrapper>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
