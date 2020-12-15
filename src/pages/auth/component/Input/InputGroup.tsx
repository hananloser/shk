import React, { ReactNode } from 'react'


interface Props {
    children : ReactNode,
    icon : React.SVGProps<SVGSVGElement>
}

const InputGroup = ({ children , icon } : Props ) => {
    return (
        <div className="flex flex-wrap w-full relative h-15 bg-gray-200 items-center rounded-xl mb-4 shadow-lg my-4">
            <div className="flex -mr-px justify-center w-15 p-4">
                <span className="flex items-center leading-normal rounded rounded-r-none text-lg px-3 whitespace-no-wrap text-gray-600">
                    {icon}
                </span>
            </div>
            {children}
        </div>
    )
}
export default InputGroup