import React from 'react'
import Image from 'next/image'
import { Headings } from '@/components/atoms'
import { RiLightbulbLine, RiTeamLine, RiGpsLine } from "react-icons/ri";
import { CardFact } from '@/components/molecules';

const OurMisson = () => {
    const dataFact = [
        {
            icon: <RiLightbulbLine />,
            title: "Innovation",
            desc: "At trustprover, we foster a culture of innovation where bold ideas are encouraged and creativity is celebrated. Join us in pioneering groundbreaking solutions that redefine trust and security in the digital realm."
        },
        {
            icon: <RiTeamLine />,
            title: "Collaboration",
            desc: "Collaboration is at the heart of trustprover's success. We believe in the power of teamwork to tackle complex challenges and drive meaningful progress. Join our collaborative community and work alongside talented individuals to achieve shared goals."
        },
        {
            icon: <RiGpsLine />,
            title: "Impact",
            desc: "trustprover offers you the opportunity to make a tangible impact on the world. Join our team and be part of a company that is dedicated to building technologies that enhance trust, security, and transparency globally."
        }
    ]
    return (
        <section className="bg-white px-5 lg:px-20 py-5 lg:pb-[160px] lg:pt-[80px]">
            <div className="container max-w-container mx-auto mb-[75px]">
                <div className="bg-[url('/images/containers/frame-5.webp')] bg-cover bg-right lg:bg-center w-full p-4 lg:p-[52px] rounded-df overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-5 lg:gap-x-[60px]">
                        <div className="my-auto text-left">
                            <Headings control="h1" text="Our Mission" fontColor="text-white" className="mb-3 lg:mb-6" />
                            <p className="text-white text-sm lg:text-base leading-df mb-0">
                                trustprover&apos;s mission is to provide a platform that evaluates reviews and additional information about companies, ensuring customers a secure shopping experience. We aim to foster transparency and trust by empowering consumers with reliable insights, ultimately enhancing their confidence in their purchasing decisions.
                            </p>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/containers/image-4.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full rounded-df"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container max-w-container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5">
                    {
                        dataFact?.map((item: any, i: number) => {
                            return (
                                <CardFact key={i} data={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurMisson