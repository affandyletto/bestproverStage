import React from 'react'
import { Footer, LoginForm, Navbar } from '@/components/organisms'
import { unstable_setRequestLocale } from "next-intl/server";

const page = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  )
}

export default page