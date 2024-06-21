import React from 'react'
import { Headings } from '@/components/atoms'

const Fact = ({ data }: any) => {
    return (
        <div className="bg-gray-300 rounded-df p-4 md:p-8 mb-4 md:mb-0">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-blue-500 rounded-full text-white text-xl shadow-md mb-3 lg:mb-6">
                {data?.icon}
            </div>
            <div>
                <Headings control="h5" text={data?.title} className="mb-1 lg:mb-3" />
                <p className="text-sm lg:text-base font-normal text-gray-500 md:leading-df mb-0">
                    {data?.desc}
                </p>
            </div>
        </div>
    )
}

export default Fact