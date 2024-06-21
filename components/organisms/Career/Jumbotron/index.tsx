import React from 'react'
import { JumbotronDefault } from '@/components/molecules';
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { RiUser2Fill } from "react-icons/ri";

const Jumbotron = () => {
  const locale = useLocale() as Locale;

  return (
    <>
      <JumbotronDefault
        title="Become part of the trustprover success story."
        desc="Join trustprover's dynamic team dedicated to revolutionizing trust and security in the digital world. Explore exciting opportunities to innovate, collaborate, and make a real difference in shaping tomorrow's technology landscape."
        image="/images/containers/jumbotron-career.webp"
        btn="Apply Now"
        url={`/${locale}/auth/signup`}
        isPill={true}
        positionPil="left-2 lg:left-4 bottom-4 lg:bottom-8"
        iconPil={<RiUser2Fill />}
        titlePil="Join us now"
        descPil="100+ employee globally"
      />
    </>
  )
}

export default Jumbotron