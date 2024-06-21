import React from 'react'
import { RiInbox2Line } from "react-icons/ri";
import { Buttons, Headings } from '@/components/atoms';

const ContainerEmpty = ({ title, desc, className, btn, url }: any) => {
    return (
        <div className="flex justify-center items-center py-10 md:py-0 bg-white md:h-[513px]">
            <div className={`text-center ${className}`}>
                <div className="flex justify-center items-center w-[52px] h-[52px] text-2xl text-gray-500 rounded-full border border-gray-100 shadow-md mx-auto mb-8">
                    <RiInbox2Line />
                </div>
                <div className="mb-8">
                    <Headings control="h5" text={title} className="mb-2" />
                    <p className="text-base font-normal text-gray-500 leading-df mb-0">
                        {desc}
                    </p>
                </div>
                <Buttons control="primary" isLink={true} url={url} text={btn} className="py-2.5 lg:py-[14px] px-7 shadow-md" />
            </div>
        </div>
    )
}

export default ContainerEmpty