import clsx from 'clsx';
import React from 'react'

export enum Variant {
    widest = 'w-full lg:w-1/2',
    half = 'w-1/2'
}

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string,
    placeholder: string,
    variant?: keyof typeof Variant
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    { name, placeholder, type, variant = 'widest', ...props }, ref) => {
    const className = clsx(
        "leading-normal shadow-xl  mt-2 border-2 border-gray-400 h-8  p-6 rounded-lg  font-roboto text-lg outline-none",
        Variant[variant],
        props.className
    )
    return (
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            ref={ref}
            className={className}
            {...props}
        />
    );
})

export default Input