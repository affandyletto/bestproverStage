import React from 'react'
import Image from 'next/image'
import { Buttons, Headings } from '@/components/atoms'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Why = () => {
    const locale = useLocale() as Locale;

    return (
        <section className="bg-white px-5 pt-5 pb-5 lg:pt-[150px] lg:pb-[105px]">
            <div className="container max-w-container mx-auto">
                <div className="mb-9 text-center">
                    <Headings control="h1" text="Why trustprover" className="mb-4" />
                    <p className="text-base text-gray-500">
                        There are several reasons to collaborate with trustprover
                    </p>
                </div>
                <div className="relative md:grid md:grid-cols-2 md:gap-x-6 mb-4 md:mb-6">
                    <div className="bg-gray-300 rounded-df p-4 md:p-8 mb-4 md:mb-0">
                        <div className="flex justify-center items-center w-[42px] h-[42px] p-3 bg-blue-500 rounded-full text-white text-xl shadow-md mb-3 md:mb-6">
                            <Image
                                src="/images/icons/icon-business-1.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full "
                            />
                        </div>
                        <div>
                            <Headings control="h5" text="More Trust" className="mb-1 md:mb-3" />
                            <p className="text-sm md:text-base font-normal text-gray-500 md:leading-df mb-4 md:mb-6">
                                Create more trust by showing your customers a total rating from various rating platforms.
                            </p>
                            <Buttons control="secondary" isLink={true} url={`/${locale}/`} text={<BtnReadMore />} className="py-2.5 lg:py-3 px-4 text-sm shadow-md" />
                        </div>
                    </div>
                    <div className="relative mb-4 md:mb-0 mt-8 md:mt-0">
                        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gray-300 rounded-df"></div>
                        <div className="bg-blue-500 z-20 rounded-df p-4 md:p-8 bg-[url('/images/containers/bg-jumbotron.webp')] bg-cover bg-center relative bottom-4">
                            <div className="flex justify-center items-center w-[42px] h-[42px] p-3 bg-white rounded-full text-white text-xl shadow-md mb-3 md:mb-6 ">
                                <Image
                                    src="/images/icons/icon-business-2.webp"
                                    width={1000}
                                    height={1000}
                                    alt="image"
                                    className="w-full "
                                />
                            </div>
                            <div>
                                <Headings control="h5" text="Expert Check" fontColor="text-white" className="mb-1 md:mb-3" />
                                <p className="text-base font-normal text-white opacity-70 leading-df mb-6">
                                    Avoid the consequences of emotional and situational customer reviews with the help of the expert check.
                                </p>
                                <Buttons control="primary" isLink={true} url={`/${locale}/`} text={<BtnReadMore />} className="py-2.5 lg:py-3 px-4 text-sm shadow-md" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="md:grid md:grid-cols-5 md:gap-x-6 mb-4 md:mb-6">
                    <div className="col-span-2 bg-gray-300 rounded-df p-4 md:p-8 mb-4 md:mb-0">
                        <div className="flex justify-center items-center w-[42px] h-[42px] p-3 bg-blue-500 rounded-full text-white text-xl shadow-md mb-3 md:mb-6">
                            <Image
                                src="/images/icons/icon-business-3.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full "
                            />
                        </div>
                        <div>
                            <Headings control="h5" text="Total Rating" className="mb-1 md:mb-3" />
                            <p className="text-sm md:text-base font-normal text-gray-500 md:leading-df mb-4 md:mb-6">
                                Simplify your customers&apos; research on various rating platforms by displaying a total rating on trustprover.
                            </p>
                            <Buttons control="secondary" isLink={true} url={`/${locale}/`} text={<BtnReadMore />} className="py-2.5 lg:py-3 px-4 text-sm shadow-md" />
                        </div>
                    </div>
                    <div className="col-span-3 bg-gray-300 rounded-df p-4 md:p-8 mb-4 md:mb-0">
                        <div className="flex justify-center items-center w-[42px] h-[42px] p-3 bg-blue-500 rounded-full text-white text-xl shadow-md mb-3 md:mb-6">
                            <Image
                                src="/images/icons/icon-business-4.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full "
                            />
                        </div>
                        <div>
                            <Headings control="h5" text="New Customers" className="mb-1 md:mb-3" />
                            <p className="text-sm md:text-base font-normal text-gray-500 md:leading-df mb-4 md:mb-6">
                                Gain more customers with the help of a verified company page on trustprover.
                            </p>
                            <Buttons control="secondary" isLink={true} url={`/${locale}/`} text={<BtnReadMore />} className="py-2.5 lg:py-3 px-4 text-sm shadow-md" />
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-5 md:gap-x-6 mb-4 md:mb-6">
                    <div className="col-span-3 bg-gray-300 rounded-df p-4 md:p-8 mb-4 md:mb-0">
                        <div className="flex justify-center items-center w-[42px] h-[42px] p-3 bg-blue-500 rounded-full text-white text-xl shadow-md mb-3 md:mb-6">
                            <Image
                                src="/images/icons/icon-business-5.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full "
                            />
                        </div>
                        <div>
                            <Headings control="h5" text="Safety Certification" className="mb-1 md:mb-3" />
                            <p className="text-sm md:text-base font-normal text-gray-500 md:leading-df mb-4 md:mb-6">
                                Guarantee the reliability and security of your products and services with the help of  trustprover.
                            </p>
                            <Buttons control="secondary" isLink={true} url={`/${locale}/`} text={<BtnReadMore />} className="py-2.5 lg:py-3 px-4 text-sm shadow-md" />
                        </div>
                    </div>
                    <div className="col-span-2 bg-gray-300 rounded-df p-4 md:p-8 mb-4 md:mb-0">
                        <div className="flex justify-center items-center w-[42px] h-[42px] p-3 bg-blue-500 rounded-full text-white text-xl shadow-md mb-3 md:mb-6">
                            <Image
                                src="/images/icons/icon-business-6.webp"
                                width={1000}
                                height={1000}
                                alt="image"
                                className="w-full "
                            />
                        </div>
                        <div>
                            <Headings control="h5" text="Performance Support" className="mb-1 md:mb-3" />
                            <p className="text-sm md:text-base font-normal text-gray-500 md:leading-df mb-4 md:mb-6">
                                Our team of experts will support you in improving your performance  with the help of trustprover.
                            </p>
                            <Buttons control="secondary" isLink={true} url={`/${locale}/`} text={<BtnReadMore />} className="py-2.5 lg:py-3 px-4 text-sm shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why

const BtnReadMore = () => {
    return (
        <div className="flex justify-center items-center">
            <span className="mr-1">Read More</span> <MdOutlineKeyboardArrowRight />
        </div>
    )
}