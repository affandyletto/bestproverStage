import React from 'react'
import Image from 'next/image'
import { PiQuotesFill } from "react-icons/pi";

const Review = ({ data }: any) => {
    return (
        <div className="bg-gray-300 rounded-df p-4 lg:p-8 mb-4 md:mb-0">
            <div className="w-6 md:w-11 h-6 md:h-11 flex justify-center items-center text-[42px] text-blue-500 mb-4 md:mb-8">
                <PiQuotesFill />
            </div>
            <div className="md:h-[150px] lg:h-[186px] mb-4 lg:mb-8">
                <p className="text-sm md:text-base lg:text-2xl font-normal text-black-500 lg:leading-[31.2px] line-clamp-6">
                    {data?.quotes}
                </p>
            </div>
            <div className="flex justify-start items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-[68px] lg:h-[68px] rounded-full overflow-hidden mr-4">
                    <Image
                        src={data?.image}
                        width={1000}
                        height={1000}
                        alt="icon"
                        className="rounded-full"
                    />
                </div>
                <div>
                    <p className="text-sm lg:text-base font-semibold text-black-500 lg:leading-[20.8px]mb-0 lg:mb-1">
                        {data?.name}
                    </p>
                    <p className="text-xs lg:text-base font-normal text-gray-500 lg:leading-[25.6px] mb-0">
                       {data?.position}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review