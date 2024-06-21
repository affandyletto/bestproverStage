import React from 'react'
import { Footer, Navbar, VerificationForm } from '@/components/organisms'
import { unstable_setRequestLocale } from "next-intl/server";

const page = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);

  return (
    <>
        <Navbar />
        <VerificationForm />
        <Footer />
    </>
  )
}

export default page