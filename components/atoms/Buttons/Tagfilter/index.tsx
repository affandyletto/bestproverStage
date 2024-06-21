import React from 'react'

const Tagfilter = (props: any) => {
    const { data, onClick } = props
    return (
        <button 
            type="button" 
            className={`block text-sm lg:text-base text-gray-500 py-2 lg:py-3 px-5 lg:px-7 mr-2 lg:mr-4 border border-gray-100 rounded-full mb-2 ${data?.isActive ? 'bg-gray-100 font-semibold' : 'bg-white'}`} 
            onClick={onClick}
        >
            {data?.name}
        </button>
    )
}

export default Tagfilter