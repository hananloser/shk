import React from 'react'
import clsx from 'clsx'


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string,
    placeholder: string,
    value?: string,
};


const Inputs = React.forwardRef<HTMLInputElement, Props>(({ name, placeholder, value, ...props }, ref) => {
    const className = clsx('leading-normal shadow-xl border-gray-400 h-11  p-3 rounded-lg  font-roboto text-md outline-none w-full');
    return (
        <input name={name} className={className} placeholder={placeholder} value={value} ref={ref} {...props} />
    )
})

export default Inputs
