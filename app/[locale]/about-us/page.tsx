import {
  ContainerAboutUs,
  CooperationAboutUs,
    ExpertVoiceAboutUs,
    Faq,
    Footer,
    JumbotronAboutUs,
    Navbar,
    NeedHelp,
    TeamAboutUs,
  } from "@/components/organisms";
  import { unstable_setRequestLocale } from "next-intl/server";
  
  
  
  const page = ({
    params: { locale },
  }: Readonly<{ params: { locale: string } }>) => {
    unstable_setRequestLocale(locale);
  
    return (
      <>
        <Navbar />
        <JumbotronAboutUs />
        <CooperationAboutUs />
        <ContainerAboutUs />
        <TeamAboutUs />
        <ExpertVoiceAboutUs />
        <Faq />
        <NeedHelp />
        <Footer />
      </>
    )
  }
  
  export default page
  