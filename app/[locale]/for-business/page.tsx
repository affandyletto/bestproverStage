import {
  ExpertVoiceForBusiness,
  FactForBusiness,
  Faq,
    Footer,
    JumbotronForBusiness,
    Navbar,
    NeedHelp,
    RightPlanForBusiness,
    WhyForBusiness,
  } from "@/components/organisms";
  import { unstable_setRequestLocale } from "next-intl/server";
  
  
  
  const page = ({
    params: { locale },
  }: Readonly<{ params: { locale: string } }>) => {
    unstable_setRequestLocale(locale);
  
    return (
      <>
        <Navbar />
        <JumbotronForBusiness />
        <FactForBusiness />
        <WhyForBusiness />
        <RightPlanForBusiness />
        <ExpertVoiceForBusiness />
        <Faq />
        <NeedHelp />
        <Footer />
      </>
    )
  }
  
  export default page
  