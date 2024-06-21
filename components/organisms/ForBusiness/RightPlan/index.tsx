import React from 'react'
import { Buttons, Headings } from '@/components/atoms'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { RiCheckboxCircleLine } from "react-icons/ri";

const RightPlan = () => {
    const locale = useLocale() as Locale;

    return (
        <section className="bg-white px-5 pt-5 pb-5 lg:pt-[45px] lg:pb-[138px]">
            <div className="container max-w-container mx-auto">
                <div className="mb-6 lg:mb-12 text-center">
                    <Headings control="h1" text="Find the right plan for you" className="mb-4" />
                    <p className="text-base text-gray-500">
                        You want to increase the trust of your company for your customer?
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4">
                    <div className="rounded-df bg-gray-450 border border-gray-100 px-6 py-8 mb-4 lg:mb-0">
                        <div className="mb-6">
                            <Headings control="h5" text="Free" className="mb-4" />
                            <p className="text-base font-normal text-gray-500 lg:leading-df mb-0">
                                For any company that wants to increase customer confidence.
                            </p>
                        </div>
                        <div className="flex justify-start items-center mb-6">
                            <Headings control="h5" text="Free" className="mr-3" />
                            <p className="text-base font-normal text-gray-500 lg:leading-df mb-0">
                                per month
                            </p>
                        </div>
                        <Buttons control="primary" isLink={true} url={`/${locale}/auth/signup`} text={"Get Started for Free"} className="w-full text-center py-2.5 lg:py-4 text-base shadow-md mb-6" />
                        <div className="border-t border-t-gray-150 pt-6">
                            <ul>
                                <li className="flex items-center justify-start text-gray-500 mb-4">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                                <li className="flex items-center justify-start text-gray-500 mb-4">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                                <li className="flex items-center justify-start text-gray-500 mb-4">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                                <li className="flex items-center justify-start text-gray-500">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative my-4 lg:my-0">
                        <div className="relative z-20 bottom-4 rounded-df bg-blue-500 border border-blue-500 px-6 py-8 bg-[url('/images/containers/frame-3.webp')] bg-cover bg-right-top ">
                            <div className="mb-6">
                                <div className="flex justify-start items-center mb-4">
                                    <Headings control="h5" text="Premium" fontColor="text-white" />
                                    <span className="text-sm font-medium text-white py-1.5 px-3 rounded-full bg-white bg-opacity-20 ml-3">
                                        Most popular
                                    </span>
                                </div>
                                <p className="text-base font-normal text-white opacity-70 lg:leading-df mb-0">
                                    For companies that want to improve their presence and attract potential new customers.
                                </p>
                            </div>
                            <div className="flex justify-start items-center mb-6">
                                <Headings control="h5" text="$299" fontColor="text-white" className="mr-3" />
                                <p className="text-base font-normal text-white opacity-70 lg:leading-df mb-0">
                                    per month
                                </p>
                            </div>
                            <Buttons control="primary" isLink={true} url={`/${locale}/auth/signup`} text={"Get Started"} className="w-full text-center py-2.5 lg:py-4 text-base shadow-md mb-6" />
                            <div className="border-t border-t-gray-150 pt-6">
                                <ul>
                                    <li className="flex items-center justify-start mb-4 text-white">
                                        <RiCheckboxCircleLine />
                                        <span className="ml-3 text-base font-normal opacity-70">
                                            Turpis faucibus massa faucibus
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-start mb-4 text-white">
                                        <RiCheckboxCircleLine />
                                        <span className="ml-3 text-base font-normal opacity-70">
                                            Turpis faucibus massa faucibus
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-start mb-4 text-white">
                                        <RiCheckboxCircleLine />
                                        <span className="ml-3 text-base font-normal opacity-70">
                                            Turpis faucibus massa faucibus
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-start text-white">
                                        <RiCheckboxCircleLine />
                                        <span className="ml-3 text-base font-normal opacity-70">
                                            Turpis faucibus massa faucibus
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 rounded-df bg-gray-300 w-full h-full"></div>
                    </div>
                    <div className="rounded-df z-10 bg-orange-500 border border-orange-500 px-6 py-8 bg-[url('/images/containers/frame-3.webp')] bg-cover bg-right-top mb-4 lg:mb-0">
                        <div className="mb-6">
                            <Headings control="h5" text="Professional" fontColor="text-blue-500" className="mb-4" />
                            <p className="text-base font-normal text-blue-500 opacity-70 lg:leading-df mb-0">
                                For companies that want to get the most out of their trustprover potential and grow.
                            </p>
                        </div>
                        <div className="flex justify-start items-center mb-6">
                            <Headings control="h5" text="$499" fontColor="text-blue-500" className="mr-3" />
                            <p className="text-base font-normal text-blue-500 opacity-70 lg:leading-df mb-0">
                                per month
                            </p>
                        </div>
                        <Buttons control="secondary" isLink={true} url={`/${locale}/auth/signup`} text={"Get Started"} className="w-full text-center py-2.5 lg:py-4 text-base text-blue-500 shadow-md mb-6" />
                        <div className="border-t border-t-gray-150 pt-6">
                            <ul>
                                <li className="flex items-center justify-start mb-4 text-blue-500">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal opacity-70">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                                <li className="flex items-center justify-start mb-4 text-blue-500">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal opacity-70">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                                <li className="flex items-center justify-start mb-4 text-blue-500">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal opacity-70">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                                <li className="flex items-center justify-start text-blue-500">
                                    <RiCheckboxCircleLine />
                                    <span className="ml-3 text-base font-normal opacity-70">
                                        Turpis faucibus massa faucibus
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RightPlan