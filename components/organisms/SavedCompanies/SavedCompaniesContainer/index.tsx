import React from 'react'
import { type Locale } from "@/i18n.config";
import { useLocale } from "next-intl";
import { DropdownFilter, Headings } from '@/components/atoms';
import { CardCompany, ContainerEmpty } from '@/components/molecules';

const SavedCompaniesContainer = () => {
    const locale = useLocale() as Locale;

    const selectFilter = [
        { label: "Sort by latest added", value: 1 },
        { label: "Sort by newest added", value: 2 },
        { label: "Sort by A to Z", value: 3 },
        { label: "Sort by Z to A", value: 4 },
    ]

    const dataCompanies = [
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
    ]

    return (
        <section className="px-5 bg-white pt-10 md:pt-12 pb-20 md:pb-[180px]">
            <div className="container max-w-container mx-auto">
                <div className="md:flex md:items-center md:justify-between mb-4 lg:mb-6">
                    <div className="mb-2 md:mb-0">
                        <Headings control="h5" text="Saved companies" className="mb-0 md:mb-2" />
                        <p className="text-base font-normal text-gray-500 leading-df mb-0">
                            18 company saved
                        </p>
                    </div>
                    <div>
                        <DropdownFilter data={selectFilter} label="Sort by latest added" value={1} />
                    </div>
                </div>
                <ContainerEmpty 
                    title="There is no company saved."
                    desc="You haven&apos;t saved any companies yet. Saved companies will appear here. Start browsing companies to save your favorites!"
                    className="w-[663px]"
                    btn="Explore Now"
                    url={`/${locale}/home/saved-companies`}
                />
                <div className="grid grid-cols-1 gap-5">
                    {
                        dataCompanies?.map((item: any, i:number) => {
                            return (
                                <CardCompany key={i} data={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SavedCompaniesContainer