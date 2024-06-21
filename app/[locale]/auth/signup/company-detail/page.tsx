import React from 'react'
import { CompanyForm, Footer, Navbar } from '@/components/organisms'
import { unstable_setRequestLocale } from "next-intl/server";

const page = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <CompanyForm />
      <Footer />
    </>
  )
}

export default page