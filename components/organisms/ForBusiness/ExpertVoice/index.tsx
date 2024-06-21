import React from 'react'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { Headings } from '@/components/atoms';
import { CardReview, JumbotronMini } from '@/components/molecules';

const ExpertVoice = () => {
    const locale = useLocale() as Locale;
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
        <section className="bg-white px-5 pt-5 pb-10 lg:py-10 lg:px:20">
            <div className="container max-w-container mx-auto mb-[75px]">
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
            <div className="mb-6">
                <JumbotronMini
                    title="You have a business"
                    desc="Register now for free with trustprover and create a more trust."
                    btn="Get Started"
                    url={`/${locale}/auth/signup`}
                />
            </div>
        </section>
    )
}

export default ExpertVoice