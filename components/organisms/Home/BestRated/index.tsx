'use client'
import React, { useState } from 'react'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { Buttons, Headings } from '@/components/atoms'
import { CardBestRated, JumbotronMini, SlickSingle } from '@/components/molecules';

const BestRated = () => {
    const locale = useLocale() as Locale;

    const [categories, setCategories] = useState<any>([
        {
            name: "All",
            isActive: true,
            tag: ""
        },
        {
            name: "Restaurants",
            isActive: false,
            tag: "restaurants"
        },
        {
            name: "Hair Dresser",
            isActive: false,
            tag: "hair-dresser"
        },
    ])

    const selectCategory = (slug: string) => {
        const setData = categories.map((item: any) => ({
            ...item,
            isActive: item.tag === slug
        }))
        console.log(setData)
        setCategories(setData);
    }

    const [cardBest, setCardBest] = useState<any>([
        {
            name: "Tanendiele",
            image: "/images/cards/default-card-1.webp",
            isVerified: true,
            isPlus: true,
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            stars: 5,
            ratings: "4.5",
            review: "1,483",
            tag: "restaurants"
        },
        {
            name: "Darlene Coffee Shop & Bakery Holand",
            image: "/images/cards/default-card-2.webp",
            isVerified: true,
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            stars: 4,
            ratings: "4.5",
            review: "1,483",
            tag: "restaurants"
        },
        {
            name: "Garpoxite Sidecity",
            image: "/images/cards/default-card-3.webp",
            isVerified: true,
            isPlus: true,
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            stars: 5,
            ratings: "4.5",
            review: "1,483",
            tag: "hair-dresser"
        },
        {
            name: "God-Dream Space",
            image: "/images/cards/default-card-4.webp",
            isVerified: true,
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            stars: 3,
            ratings: "4.5",
            review: "1,483",
            tag: "restaurants"
        },
        {
            name: "Garpoxite Sidecity",
            image: "/images/cards/default-card-3.webp",
            isVerified: true,
            isPlus: true,
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            stars: 5,
            ratings: "4.5",
            review: "1,483",
            tag: "hair-dresser"
        },
        {
            name: "God-Dream Space",
            image: "/images/cards/default-card-4.webp",
            isVerified: true,
            address: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            stars: 3,
            ratings: "4.5",
            review: "1,483",
            tag: "restaurants"
        },
    ])

    return (
        <section className="bg-white px-3 lg:px-16 py-5 lg:py-14">
            <div className="container max-w-container mx-auto px-2 lg:px-0">
                <div className="">
                    <div className="mb-5">
                        <Headings control="h1" text="Best rated" />
                    </div>
                    <div className="flex items-center flex-wrap mb-4">
                        {
                            categories?.map((item: any, i: number) => {
                                return (
                                    <Buttons key={i} control="tagfilter" data={item} onClick={() => selectCategory(item?.tag)} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="max-w-container-slick mx-auto lg:px-2 mb-5 lg:mb-14">
                <SlickSingle
                    Component={CardBestRated}
                    countDesktop={4}
                    countMobile={2}
                    slidesToScroll={1}
                    data={cardBest}
                    className="px-1.5 lg:px-2"
                />
            </div>
            <JumbotronMini
                title="You have a business"
                desc="Register now for free with trustprover and create a more trust."
                btn="Get Started"
                url={`/${locale}/auth/signup`}
            />
        </section>
    )
}

export default BestRated