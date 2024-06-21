import React from 'react'
import Image from 'next/image'
import { Headings } from '@/components/atoms'

const Cooperation = () => {
    const data = [
        {
            title: "3.4+ Mill",
            desc: "Summarized reviews on trustprover"
        },
        {
            title: "1.49+ Mill",
            desc: "Verified websites and companies"
        },
        {
            title: "1.49+ Mill",
            desc: "Summarized reviews on trustprover"
        },
        {
            title: "2024",
            desc: "Foundation of trustprover"
        }
    ]

    return (
        <>
            <section className="px-5 py-10 lg:py-[80px]">
                <div className="container max-w-container mx-auto">
                    <div className="text-center mb-5 lg:mb-10">
                        <h1 className="text-base font-normal text-black-500 leading-df mb-0">Facts about trustprover</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-x-6">
                        {
                            data?.map((item: any, i: number) => {
                                return (
                                    <div key={i} className="text-center">
                                        <Headings control="h1" text={item?.title} className="lg:leading-[50.4px] mb-2" />
                                        <p className="text-sm lg:text-base font-normal text-gray-500 leading-df">
                                            {item?.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="container max-w-container mx-auto w-full h-[1px] bg-gray-100"></div>
        </>
    )
}

export default Cooperation