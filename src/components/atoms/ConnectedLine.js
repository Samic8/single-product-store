import React from 'react'

export default function ConnectedLine({children}) {
    return (
        <div className='relative'>
            <div className='z-10'>{children}</div>
            <span className='z-0 w-1 h-20 opacity-40 bg-white absolute top-full left-1/2'></span>
        </div>
    )
}
