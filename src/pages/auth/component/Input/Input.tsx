import React, { InputHTMLAttributes } from 'react'


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    placeholder: string,
}


const Input = ({ name, type, ...rest }: Props) => {
    return (
        <input
            id={name}
            type={type}
            {...rest}
            className="flex-shrink rounded flex-grow flex-auto leading-normal w-px mt-2 border-0 h-8 px-3 relative self-center font-roboto text-lg outline-none bg-gray-200"
        />
    )
}

export default Input
