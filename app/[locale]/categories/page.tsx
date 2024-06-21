import {
  BestOfCategoryCategories,
    BestRatedCategories,
    Footer,
    JumbotronCategories,
    Navbar,
  } from "@/components/organisms";
  import { unstable_setRequestLocale } from "next-intl/server";
  
  
  
  const page = ({
    params: { locale },
  }: Readonly<{ params: { locale: string } }>) => {
    unstable_setRequestLocale(locale);
  
    return (
      <>
        <Navbar />
        <JumbotronCategories />
        <BestOfCategoryCategories />
        <BestRatedCategories />
        <Footer />
      </>
    )
  }
  
  export default page
  