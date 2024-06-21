import React from 'react'
import { Headings } from '@/components/atoms'
import { CardJob } from '@/components/molecules'

const OpenJobs = () => {
    const dataJobs = [
        {
            category: "Design & Development",
            title: "Senior Website Designer",
            desc: "We are looking for website designer to join our team quickly.",
            type: "Full-time",
            location: "German"
        },
        {
            category: "Design & Development",
            title: "Product Designer",
            desc: "We are looking for website designer to join our team quickly.",
            type: "Full-time",
            location: "German"
        },
        {
            category: "Design & Development",
            title: "Marketing Consultant",
            desc: "We are looking for website designer to join our team quickly.",
            type: "Full-time",
            location: "German"
        },
        {
            category: "Design & Development",
            title: "Senior Web Designer",
            desc: "We are looking for website designer to join our team quickly.",
            type: "Full-time",
            location: "German"
        },
        {
            category: "Design & Development",
            title: "Product Designer",
            desc: "We are looking for website designer to join our team quickly.",
            type: "Full-time",
            location: "German"
        },
        {
            category: "Design & Development",
            title: "Marketing Consultant",
            desc: "We are looking for website designer to join our team quickly.",
            type: "Full-time",
            location: "German"
        },
    ]

    return (
        <section className="bg-white px-5 lg:px-20 py-5 lg:pb-[80px] lg:pt-[150px]">
            <div className="container max-w-container mx-auto">
                <div className="mb-5">
                    <Headings control="h1" text="Open Jobs" className="mb-0 lg:mb-2" />
                    <p className="text-sm lg:text-base text-gray-500 leading-df mb-0">
                        We have 6 job opportunities
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {
                        dataJobs?.map((item: any, i:number) => {
                            return (
                                <div key={i}><CardJob data={item} /></div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OpenJobs