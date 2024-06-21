import React from 'react'
import { JumbotronDefault } from '@/components/molecules';
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { RiEmotionFill } from "react-icons/ri";

const Jumbotron = () => {
  const locale = useLocale() as Locale;

  return (
    <>
      <JumbotronDefault
        title="We make your shopping experience better."
        desc="trustprover is a platform that evaluates reviews and other information from companies to ensure customers have a safe shopping experience."
        image="/images/containers/jumbotron-about-us.webp"
        isPill={true}
        positionPil="left-2 lg:left-4 bottom-4 lg:bottom-8"
        iconPil={<RiEmotionFill />}
        titlePil="Happy Customers"
        descPil="250k customers around the world"
      />
    </>
  )
}

export default Jumbotron