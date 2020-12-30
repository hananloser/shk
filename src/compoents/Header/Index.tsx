import React from 'react'
import MemoAvatar from '../../assets/icons/Avatar'
import MemoShk from '../../assets/icons/Shk'

const Header = () => {
    return (
        <div className="header px-5 shadow w-full h-24 flex justify-between items-center md:px-16 bg-alt">
            <MemoShk className="text-8xl" />
            <span></span>
            <div className="user-profile flex space-x-3 items-center">
                <div className="logo-section">
                </div>
                <div className="name font-bold text-gray-800 mt-1">Hanan Asyrawi</div>
                <MemoAvatar className="text-5xl ml-3" />
            </div>
        </div>
    )
}

export default Header