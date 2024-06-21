import {
    BreadcrumbSavedCompanies,
    ContainerSavedCompanies,
    Footer,
    Navbar,
  } from "@/components/organisms";
  import { unstable_setRequestLocale } from "next-intl/server";
  
  
  
  const page = ({
    params: { locale },
  }: Readonly<{ params: { locale: string } }>) => {
    unstable_setRequestLocale(locale);
  
    return (
      <>
        <Navbar isLogin={true} />
        <BreadcrumbSavedCompanies />
        <ContainerSavedCompanies />
        <Footer />
      </>
    )
  }
  
  export default page
  