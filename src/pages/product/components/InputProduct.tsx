import React from 'react'
import Inputs from '../../../compoents/Inputs/Inputs'



interface Props {
    label: string
    name: string,
    register: any,
}

/**
 * @todo Must Be Dynamic 
 */
const InputProduct = ({ register, name, label }: Props) => {
    return (
        <div className="flex items-center mx-2">
            <div className="label w-1/6 ml-2 mr-6">
                <span className="font-bold">{label}</span>
                <span className="text-primary">*</span>
            </div>
            <div className="flex flex-col w-full md:pr-24 flex-grow-0">
                <Inputs name={name} type='text' placeholder={label} autoComplete="off" ref={register} />
            </div>
        </div>
    )
}

export default InputProduct
