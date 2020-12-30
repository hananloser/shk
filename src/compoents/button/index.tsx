import React from 'react'
import clsx from 'clsx';

export enum BtnType {
    normal = '',
    block = 'w-full justify-center',
}

export enum Variant {
    primary = 'border-2 border-transparent bg-red-700 hover:bg-red-600 font-semibold',
    secondary = 'border-2 border-transparent bg-white text-primary-500',
    silent = 'border-2 border-transparent bg-transparent text-primary-500',
    outline = 'border-2 border-primary text-red-800 font-semibold transition duration-100 hover:bg-gray-600 hover:bg-opacity-10',
    outlineTextWhite = 'border-2 border-gray-600 text-white transition duration-100 hover:bg-gray-600 hover:bg-opacity-10',
    outlineLight = 'border-2 border-gray-300 hover:border-gray-400 text-primary-500 transition duration-100 hover:bg-gray-600 hover:bg-opacity-10',
    light = 'bg-white border-2 border-gray-400 hover:border-gray-500 text-primary-500',
    alternative = 'border-2 border-transparent bg-yellow-300 hover:bg-yellow-400 font-semibold'
}

export enum TextVariant {
    light = 'font-light',
    normal = 'font-normal',
    medium = 'font-medium',
    bold = 'font-bold',
}

export enum Size {
    small = 'py-1 md:py-2 px-2 md:px-3 text-sm',
    medium = 'py-2 px-3',
    large = 'text-lg py-3 px-4',
    xlarge = 'text-xl py-3 px-4',
}

type HtmlButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'>;

type Props = HtmlButtonProps & {
    btnType?: keyof typeof BtnType;
    variant?: keyof typeof Variant;
    textVariant?: keyof typeof TextVariant;
    size?: keyof typeof Size;
    href?: string;
};


export const Button: React.FC<Props> = function ({
    type,
    btnType = 'normal',
    variant = 'primary',
    textVariant = 'normal',
    size = 'medium',
    onClick,
    href,
    children,
    ...props
}) {
    if (typeof onClick !== 'function' && type !== 'submit' && !href)
        return null;

    const className = clsx(
        'font-body inline-flex items-center justify-center rounded-xl text-white leading-none tracking-wide whitespace-no-wrap focus:outline-none',
        Variant[variant],
        TextVariant[textVariant],
        Size[size],
        BtnType[btnType],
        props.className
    );
    return (
        <button {...props} className={className} type={type || 'button'} onClick={onClick} children={children} />
    );
}