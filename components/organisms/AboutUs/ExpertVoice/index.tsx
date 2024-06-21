import React from 'react'
import { Headings } from '@/components/atoms';
import { CardReview } from '@/components/molecules';

const ExpertVoice = () => {
    const data = [
        {
            quotes: "“I founded trustprover to provide customers with a secure shopping experience. With the help of our neutral platform, companies can better evaluate their customer perception on the Internet and also attract potential new customers.“",
            image: "/images/reviewers/reviewer-1.webp",
            name: "Andreas Remy",
            position: "Founder and managing director of trustprover"
        },
        {
            quotes: "At trustprover, we are at the forefront of fostering a trustworthy online and offline environment, where transparency leads to thriving business-consumer relationships. It's not just about security; it's about building a foundation of trust that benefits everyone in the digital economy.",
            image: "/images/reviewers/reviewer-2.webp",
            name: "Nathan Kovalskia",
            position: "CEO of trustprover"
        }
    ]
    return (
        <section className="bg-white px-5 pt-5 pb-[18px] lg:py-10 lg:px:20">
            <div className="container max-w-container mx-auto">
                <div className="text-center mb-5">
                    <Headings control="h1" text="Experts voices" className="leading-[50.4px]" />
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-x-6">
                    {
                        data?.map((item: any, i:number) => {
                            return (
                                <CardReview key={i} data={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ExpertVoice