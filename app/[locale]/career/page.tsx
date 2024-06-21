import {
  ContainerCareer,
    Footer,
    JumbotronCareer,
    Navbar,
    NeedHelp,
    OpenJobsCareer,
    OurMissionCareer,
  } from "@/components/organisms";
  import { unstable_setRequestLocale } from "next-intl/server";
  
  
  
  const page = ({
    params: { locale },
  }: Readonly<{ params: { locale: string } }>) => {
    unstable_setRequestLocale(locale);
  
    return (
      <>
        <Navbar />
        <JumbotronCareer />
        <ContainerCareer />
        <OpenJobsCareer />
        <OurMissionCareer />
        <NeedHelp />
        <Footer />
      </>
    )
  }
  
  export default page
  