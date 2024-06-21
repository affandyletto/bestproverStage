'use client'
import React, { useState } from 'react'
import { CardComment, SlickSingle } from '@/components/molecules';
import { Headings } from '@/components/atoms';

const LatestReview = () => {
    const [comments, setComments] = useState<any>([
        {
            name: "Jenny Wilson",
            company: "Kasvorina",
            image: "/images/comments/default-avatar-1.webp",
            stars: 4,
            comment: "Eros facilisis morbi aliquet lectus ultricies felis convallis facilisis enim. Scelerisque donec tincidunt orci pharetra vitae massa elementum nibh. Vulputate hac venenatis et lectus."
        },
        {
            name: "Jenny Wilson",
            company: "Kasvorina",
            image: "/images/comments/default-avatar-2.webp",
            stars: 4,
            comment: "Eros facilisis morbi aliquet lectus ultricies felis convallis facilisis enim. Scelerisque donec tincidunt orci pharetra vitae massa elementum nibh. Vulputate hac venenatis et lectus."
        },
        {
            name: "Jenny Wilson",
            company: "Kasvorina",
            image: "/images/comments/default-avatar-3.webp",
            stars: 4,
            comment: "Eros facilisis morbi aliquet lectus ultricies felis convallis facilisis enim. Scelerisque donec tincidunt orci pharetra vitae massa elementum nibh. Vulputate hac venenatis et lectus."
        },
        {
            name: "Jenny Wilson",
            company: "Kasvorina",
            image: "/images/comments/default-avatar-1.webp",
            stars: 4,
            comment: "Eros facilisis morbi aliquet lectus ultricies felis convallis facilisis enim. Scelerisque donec tincidunt orci pharetra vitae massa elementum nibh. Vulputate hac venenatis et lectus."
        },
        {
            name: "Jenny Wilson",
            company: "Kasvorina",
            image: "/images/comments/default-avatar-2.webp",
            stars: 4,
            comment: "Eros facilisis morbi aliquet lectus ultricies felis convallis facilisis enim. Scelerisque donec tincidunt orci pharetra vitae massa elementum nibh. Vulputate hac venenatis et lectus."
        },
    ])

    return (
        <section className="bg-white px-3 lg:px-16 py-5 lg:py-14">
            <div className="container max-w-container mx-auto px-2 lg:px-0">
                <div className="mb-4 text-center">                    
                    <Headings control="h1" text="Latest reviews" className="mb-4" />
                    <p className="text-base text-gray-500">
                        Browsing through recent customer reviews across platforms.
                    </p>
                </div>
            </div>
            <div className="max-w-container-slick mx-auto lg:px-2">
                <SlickSingle
                    Component={CardComment}
                    countDesktop={3}
                    countMobile={1}
                    slidesToScroll={1}
                    data={comments}
                    className="px-1.5 lg:px-2"
                />
            </div>
        </section>
    )
}

export default LatestReview