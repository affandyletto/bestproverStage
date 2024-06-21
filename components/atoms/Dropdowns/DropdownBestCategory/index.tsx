'use client';
import React from 'react';
import Image from 'next/image'
import { Link } from "@/i18n.config";

const DropdownBestCategory = ({ data, isOpen, onClick }: any) => {
    return (
        <div className="relative w-full">
            <div
                className={`flex items-center justify-between rounded-df px-4 py-[18px] cursor-pointer hover:bg-blue-500 group transition-colors duration-300 ease-in-out
                ${isOpen ? 'bg-blue-500' : 'bg-gray-300'}
                    `}
                onClick={onClick}
            >
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
                    <p className={`text-base font-semibold mb-1 transition-colors duration-300 ease-in-out group-hover:text-white ${isOpen ? 'text-white' : 'text-black-500'}`}>
                        {data.title}
                    </p>
                    <p className={`text-sm font-normal transition-colors duration-300 ease-in-out group-hover:text-white ${isOpen ? 'text-white' : 'text-gray-500'}`}>
                        {data.total} Companies
                    </p>
                </div>
            </div>

            {isOpen && (
                <div
                    className="absolute z-30 top-24 right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 w-full rounded-df shadow-lg bg-white border border-gray-150 p-6 overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <ul>
                        {data?.child?.map((item: any, index: number) => (
                            <li
                                key={item.value}
                                className={`border-b border-gray-100 group ${index === data.child.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <Link href={item?.url} className={`flex justify-start items-center text-base font-medium group-hover:font-semibold text-black-500 leading-df ${index === 0 ? 'pt-0' : 'pt-4'} ${index === data.child.length - 1 ? 'pb-0' : 'pb-4'}`}>
                                    {item?.icon}
                                    <span className="ml-2">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropdownBestCategory