import React from 'react'
import Image from 'next/image'
import { Link, type Locale } from "@/i18n.config";
import { useLocale } from "next-intl";
import { Buttons } from '@/components/atoms';
import { BsFillStarFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { RiBookmarkFill, RiSendPlaneLine, RiMailLine, RiPhoneLine, RiGlobalLine  } from "react-icons/ri";
import { Headings } from '@/components/atoms';

const Company = ({ data }: any) => {
    const locale = useLocale() as Locale;
    const elementFirts = Array.from({ length: data?.stars }, (_, index) => index + 1);
    const elementSecond = Array.from({ length: 5 - data?.stars }, (_, index) => index + 1);
    return (
        <div className="md:flex md:space-x-6 p-3 overflow-hidden rounded-df lg:rounded-df bg-white border border-gray-100">
            <div className="relative flex-shrink-0">
                <Image
                    src={data?.image}
                    width={1000}
                    height={1000}
                    alt="img"
                    className="rounded-xl h-[200px] md:h-[285px] w-full md:w-[314px] object-cover bg-center"
                />
                <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-8 h-8 lg:w-[50px] lg:h-[50px] bg-white rounded-full flex items-center justify-center">
                    <Image
                        src={"/images/icons/icon-company-1.webp"}
                        width={1000}
                        height={1000}
                        alt='icon'
                        className="w-full"
                    />
                </div>
            </div>
            <div className="pb-0 pt-4 md:pb-5 md:pt-5 w-full">
                <div className="flex justify-between items-start md:mb-5">
                    {
                        data?.isPlus ? (
                            <div className="mb-2.5 inline-flex items-center bg-blue-100 rounded-full py-1.5 px-2">
                                <Image
                                    src={"/images/icons/icon-verified-plus.webp"}
                                    width={1000}
                                    height={1000}
                                    alt='icon'
                                    className="w-4 mr-1"
                                />
                                <p className="text-sm font-medium text-blue-500">
                                    Verified <span className="font-semibold">Plus</span>
                                </p>
                            </div>
                        ) : (
                            <div className="mb-2.5 inline-flex items-center bg-blue-100 rounded-full py-1.5 px-2">
                                <Image
                                    src={"/images/icons/icon-verified.webp"}
                                    width={1000}
                                    height={1000}
                                    alt='icon'
                                    className="w-4 mr-1"
                                />
                                <p className="text-sm font-medium text-blue-500">
                                    Verified
                                </p>
                            </div>
                        )
                    }
                    <button type="button" className="flex justify-center items-center w-8 h-8 md:w-11 md:h-11 bg-blue-500 bg-opacity-10 rounded-full text-base md:text-2xl text-blue-500">
                        <RiBookmarkFill />
                    </button>
                </div>
                <div className="mb-2">
                    <Headings control="h5" text={data?.name} className="md:mb-2" />
                    <p className="flex text-sm md:text-base font-normal text-gray-500 leading-df">
                        <span className="mr-1 pt-1"><FiMapPin /></span>
                        <span className="line-clamp-1">
                            {data?.address}
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="flex items-center text-base mr-3">
                        {elementFirts?.map((el: any) => (
                            <BsFillStarFill key={el} className="text-orange-500 mr-1" />
                        ))}
                        {elementSecond?.map((el: any) => (
                            <BsFillStarFill key={el} className="text-gray-50 mr-1" />
                        ))}
                    </div>
                    <div className="">
                        <p className="flex items-center text-base font-normal text-gray-500">
                            Ratings {data?.ratings} <span className="mx-3 text-gray-100">|</span> {data?.review} reviews
                        </p>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-gray-100 my-5"></div>
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <Link href={''} className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 text-base md:text-2xl text-white rounded-full border border-gray-100 bg-blue-500 mr-1 md:mr-3">
                            <RiSendPlaneLine />
                        </Link>
                        <Link href={''} className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 text-base md:text-2xl text-white rounded-full border border-gray-100 bg-blue-500 mr-1 md:mr-3">
                            <RiMailLine />
                        </Link>
                        <Link href={''} className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 text-base md:text-2xl text-white rounded-full border border-gray-100 bg-blue-500 mr-1 md:mr-3">
                            <RiPhoneLine />
                        </Link>
                        <Link href={''} className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 text-base md:text-2xl text-white rounded-full border border-gray-100 bg-blue-500 mr-1 md:mr-3">
                            <RiGlobalLine />
                        </Link>
                    </div>
                    <Buttons control="secondary" isLink={true} url={`/${locale}/home/saved-companies`} text={"View Detail"} className="py-2.5 px-5 shadow-md" />
                </div>
            </div>
        </div>
    )
}

export default Company