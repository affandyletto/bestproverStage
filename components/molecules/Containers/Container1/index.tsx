import React from 'react'
import Image from 'next/image'
import { Headings } from '@/components/atoms'

const Container1 = ({ image, title, desc }: any) => {
    return (
        <div className="container max-w-container mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
                <div className="mb-5 md:mb-0">
                    <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="Image"
                        className="w-full rounded-df"
                    />
                </div>
                <div className="md:my-auto lg:w-[500px]">
                    <Headings control="h1" text={title} className="leading-[50.4px]" />
                    <p className="text-sm lg:text-base font-normal text-gray-500 leading-df lg:mt-5">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Container1