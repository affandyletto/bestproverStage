import React from 'react'
import Image from 'next/image'
import { BsFillStarFill } from "react-icons/bs";

const Comment = ({ data }: any) => {  
    const elementFirts = Array.from({ length: data?.stars }, (_, index) => index + 1);
    const elementSecond = Array.from({ length: 5-data?.stars }, (_, index) => index + 1);

    return (
        <div className="rounded-xl lg:rounded-df border border-gray-150 p-4 lg:p-6">
            <div className="flex items-center mb-2 lg:mb-3">
                <Image 
                    src={data?.image} 
                    width={1000}
                    height={1000}
                    alt="image" 
                    className="w-[48px] h-[48px] rounded-full"
                />
                <div className="flex items-center ml-4">
                    {elementFirts?.map((el: any) => (
                        <BsFillStarFill key={el} className="text-orange-500 mr-1" />
                    ))}
                    {elementSecond?.map((el: any) => (
                        <BsFillStarFill key={el} className="text-gray-50 mr-1" />
                    ))}
                </div>
            </div>
            <div>
                <p className="text-sm lg:text-base text-black-500 mb-3 lg:mb-5">
                    <span className="font-semibold">{data?.name}</span> reviewed <span className="font-semibold">{data?.company}</span>
                </p>
                <p className="text-sm lg:text-base leading-df text-gray-500">
                    {data?.comment}
                </p>
            </div>
        </div>
    )
}

export default Comment