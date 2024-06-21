import React from 'react'
import { Footer, Navbar, SignupForm } from '@/components/organisms'
import { unstable_setRequestLocale } from "next-intl/server";

const page = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <SignupForm />
      <Footer />
    </>
  )
}

export default page