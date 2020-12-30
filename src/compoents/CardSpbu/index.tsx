import React from 'react'

interface Props {
    name?: string,
    image?: string,
}

const CardSpbu = ({ name, image }: Props) => {
    return (
        <div className="ml-2 w-80 bg-gray-200 h-60 rounded-lg relative transform hover:scale-105 duration-200 ease-out">
            <img
                src={image} alt="images"
                width="240"
                height="128"
                className="w-80 h-60 bg-cover rounded-lg"
            />
            <div className="flex w-full bg-primary rounded-bl-lg rounded-br-lg absolute bottom-0 p-3 font-bold text-alt">
                {name}
            </div>
        </div>
    )
}

export default CardSpbu
