import React from 'react'
import { JumbotronDefault } from '@/components/molecules';
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { RiBarChart2Fill } from "react-icons/ri";

const Jumbotron = () => {
  const locale = useLocale() as Locale;

  return (
    <>
      <JumbotronDefault
        title="We are here to increase the trust level of your company."
        desc="See the benefits of trustprover to bring all reviews together to simplify the shopping experience for your customers and increase trust in your company."
        image="/images/containers/jumbotron-forbusiness.webp"
        btn="Register Now"
        url={`/${locale}/auth/signup`}
        isPill={true}
        positionPil="left-2 lg:left-4 bottom-4 lg:bottom-8"
        iconPil={<RiBarChart2Fill />}
        titlePil="Simple tips to grow"
        descPil="We dedicated to help your company grow"
      />
    </>
  )
}

export default Jumbotron