import React from 'react'
import Image from 'next/image'
import { Buttons, Headings, AbsolutePill } from '@/components/atoms'
import { PiHandshake } from "react-icons/pi";

const About = () => {
    return (
        <section className="bg-white px-5 lg:px-20 py-5 lg:py-14">
            <div className="container max-w-container mx-auto">
                <div className="bg-[url('/images/containers/frame-2.webp')] bg-cover bg-right lg:bg-center w-full p-4 lg:p-[52px] rounded-df overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-5 lg:gap-x-[60px]">
                        <div className="relative">
                            <Image
                                src="/images/containers/image-about.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full rounded-df"
                            />
                            <AbsolutePill 
                                position="bottom-2 lg:bottom-3 left-2 lg:left-3"
                                icon={<PiHandshake />}
                                title="More Trust"
                                desc="Created in just a few seconds"
                            />
                        </div>
                        <div className="my-auto text-center md:text-left">
                            <Headings control="h1" text="About trustprover" fontColor="text-white" className="mb-3 lg:mb-6" />
                            <p className="text-white text-sm lg:text-base text-justify md:text-left leading-df mb-4 lg:mb-[42px]">
                                Trustprover is a platform which brings together multiple reviews from different platforms such as Trustpilot, Google Reviews, etc. It evaluates reviews and additional information about businesses to ensure customers a secure shopping experience, making it easier for them to choose the best-rated company.
                            </p>
                            <Buttons control="primary" isLink={true} url="/" text="Learn More" className="py-2.5 lg:py-4 px-8 shadow-md " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About