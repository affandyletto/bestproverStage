import {
  About,
  BestOfCategory,
  BestRated,
  Footer,
  JumbotronHome,
  LatestReview,
  Navbar,
  Recommendation
} from "@/components/organisms";
import { unstable_setRequestLocale } from "next-intl/server";



const page = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar isLogin={true} />
      <JumbotronHome />
      <BestOfCategory />
      <BestRated />
      <LatestReview />
      <About />
      <Recommendation />
      <Footer />
    </>
  )
}

export default page
