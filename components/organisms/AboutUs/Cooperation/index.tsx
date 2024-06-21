import React from 'react'
import Image from 'next/image'

const Cooperation = () => {
    const data = [
        {
            image: "/images/cooperations/cooperation-1.webp"
        },
        {
            image: "/images/cooperations/cooperation-2.webp"
        },
        {
            image: "/images/cooperations/cooperation-3.webp"
        },
        {
            image: "/images/cooperations/cooperation-4.webp"
        },
        {
            image: "/images/cooperations/cooperation-5.webp"
        }
    ]
    return (
        <section className="px-5 pt-5 pb-10 lg:pt-[80px] lg:pb-[130px]">
            <div className="container max-w-container mx-auto">
                <div className="text-center mb-2 lg:mb-[26px]">
                    <h1 className="text-base font-normal text-black-500 leading-df mb-0">Cooperations with</h1>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5">
                    {
                        data?.map((item: any, i: number) => {
                            return (
                                <div key={i + "cooperation"}>
                                    <Image
                                        src={item?.image}
                                        width={1000}
                                        height={1000}
                                        alt="image"
                                        className="w-full "
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Cooperation