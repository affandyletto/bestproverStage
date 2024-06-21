import React from 'react'
import Image from 'next/image'

const BestCategory = (props: any) => {
    const { data } = props
    return (
        <div className="flex items-center justify-between bg-gray-300 rounded-df px-4 py-[18px] cursor-pointer hover:bg-blue-500 group transition-colors duration-300 ease-in-out">
            <div className="bg-white rounded-full border border-gray-150 flex justify-center items-center flex-shrink-0 w-10 h-10 mr-4">
                <Image
                    src={data?.image}
                    width={1000}
                    height={1000}
                    alt="icon"
                    className="w-5 h-5"
                />
            </div>
            <div className="w-full">
                <p className="text-base font-semibold text-black-500 mb-1 transition-colors duration-300 ease-in-out group-hover:text-white">
                    {data.title}
                </p>
                <p className="text-sm font-normal text-gray-500 transition-colors duration-300 ease-in-out group-hover:text-white">
                    {data.total} Companies
                </p>
            </div>
        </div>
    )
}

export default BestCategory