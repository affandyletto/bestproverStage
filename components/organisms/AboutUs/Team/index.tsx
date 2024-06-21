import React from 'react'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { Buttons, Headings } from '@/components/atoms';
import { CardTeam, JumbotronMini } from '@/components/molecules';

const Team = () => {
  const locale = useLocale() as Locale;

  const data = [
    {
      image: "/images/teams/team-1.webp",
      name: "Brooklyn Simmons",
      position: "Co-founder"
    },
    {
      image: "/images/teams/team-2.webp",
      name: "Courtney Henry",
      position: "Founder"
    },
    {
      image: "/images/teams/team-3.webp",
      name: "Robert Fox",
      position: "Marketing Leader"
    },
    {
      image: "/images/teams/team-4.webp",
      name: "Eleanor Pena",
      position: "Web Developer"
    }
  ]
  return (
    <section className="p-5 lg:pt-[150px] lg:pb-[110px] bg-white">
      <div className="container max-w-container mx-auto px-2 lg:px-0">
        <div className="flex justify-center mb-5">
          <div className="text-center lg:w-[528px]">
            <Headings control="h1" text="We&apos;re here with a mission" className="mb-2 leading-[50.4px]" />
            <p className="text-base text-gray-500">
              Our goal is to streamline purchasing decisions, and here in the support team, we&apos;re also dedicated to enhancing trust in businesses.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-x-4 mb-5">
          {
            data?.map((item: any, i: number) => {
              return (
                <CardTeam key={i} data={item} />
              )
            })
          }
        </div>
        <div className="text-center mb-[75px]">
          <Buttons control="primary" isLink={true} url={`/${locale}/career`} text={"Join to our team"} className="w-[182px] text-center py-2.5 lg:py-4 shadow-md" />
        </div>
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

export default Team