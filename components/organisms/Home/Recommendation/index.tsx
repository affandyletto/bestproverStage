'use client'
import React, { useState } from 'react'
import { CardBestRated, SlickSingle } from '@/components/molecules';
import { Headings } from '@/components/atoms';

const Recommendation = () => {
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
    ])

    return (
        <section className="bg-white px-3 lg:px-16 py-5 lg:py-14">
            <div className="container max-w-container mx-auto px-2 lg:px-0">
                <div className="mb-5">
                    <Headings control="h1" text="Our recommendation" />
                </div>
            </div>
            <div className="max-w-container-slick mx-auto lg:px-2 mb-4 lg:mb-10">
                <SlickSingle
                    Component={CardBestRated}
                    countDesktop={4}
                    countMobile={2}
                    slidesToScroll={1}
                    data={cardBest}
                    className="px-1.5 lg:px-2"
                />
            </div>
        </section>
    )
}

export default Recommendation