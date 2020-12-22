import React from 'react'

const Header = () => {
    return (
        <div className="header px-5 shadow-lg w-full h-24 mb-3 flex justify-between items-center md:px-20">
            <span></span>
            <div className="user-profile flex space-x-3">
                <div className="avatar w-8 h-8 ring ring-gray-300 rounded-lg cursor-pointer"></div>
                <div className="name font-bold text-gray-400 mt-1">SPBU BAWAKARAENG</div>
            </div>
        </div>
    )
}

export default Header
