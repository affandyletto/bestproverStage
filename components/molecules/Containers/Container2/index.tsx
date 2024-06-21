import React from 'react'
import Image from 'next/image'
import { Buttons, Headings } from '@/components/atoms'

const Container2 = ({ title, desc, url, btn }: any) => {
    return (
        <div className="flex justify-center items-center bg-blue-500 lg:h-[363px] bg-[url('/images/containers/frame-4.webp')] bg-cover bg-center">
            <div className="text-center w-[676px] px-5 py-8 md:py-10 lg:py-0">
                <Headings control="h1" text={title} fontColor="text-white" className="lg:leading-[54.6px]" />
                <p className="text-sm lg:text-base font-normal text-white leading-df opacity-70 lg:mt-6">
                    {desc}
                </p>
                <Buttons control="primary" isLink={true} url={url} text={btn} className="py-2.5 lg:py-4 px-8 shadow-md mt-4 lg:mt-10" />
            </div>
        </div>
    )
}

export default Container2