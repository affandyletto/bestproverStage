import React from 'react'
import { Link, type Locale } from "@/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";

const page = ({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
  unstable_setRequestLocale(locale);

  const data = [
    {
      page: "Home",
      route: "/",
      status: "Done"
    },
    {
      page: "Login",
      route: "/auth/login",
      status: "Done"
    },
    {
      page: "Verification",
      route: "/auth/verification",
      status: "Done"
    },
    {
      page: "Sign Up",
      route: "/auth/signup",
      status: "Done"
    },
    {
      page: "Sign Up Company Detail",
      route: "/auth/signup/company-detail",
      status: "Done"
    },
    {
      page: "Sign Up Summary",
      route: "/auth/signup/summary",
      status: "Done"
    },
    {
      page: "About Us",
      route: "/about-us",
      status: "Done"
    },
    {
      page: "For Business",
      route: "/for-business",
      status: "Done"
    },
    {
      page: "Career",
      route: "/career",
      status: "Done"
    },
    {
      page: "Categories",
      route: "/categories",
      status: "Done"
    },
    {
      page: "Home With Login",
      route: "/home",
      status: "Done"
    },
    {
      page: "Saved Company",
      route: "/home/saved-companies",
      status: "Done"
    },
    {
      page: "Search Result",
      route: "/search",
      status: "Pending"
    },
  ]

  return (
    <section className="py-20 px-2">
      <div className="container max-w-[800px] mx-auto bg-neutral-100 rounded-xl px-1 py-4 md:p-4">
        <h1 className="text-center text-3xl font-medium mb-5">Navigation Link</h1>
        <table className="table-auto w-full border-separate border-spacing-5">
          <thead>
            <tr>
              <th>No</th>
              <th className="text-left">Page</th>
              <th className="text-left hidden lg:block">Route</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item: any, i: number) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{i+1}.</td>
                    <td className="text-blue-400">
                      <Link href={item?.route} target="_blank" className="underline" >
                        {item?.page}
                      </Link>
                    </td>
                    <td className="hidden lg:block">{item?.route}</td>
                    <td className="text-center">
                      <span className={`${item?.status == 'Done' ? 'bg-green-400' : (item?.status == 'Progress' ? 'bg-orange-300' : 'bg-blue-400')} text-xs px-2 rounded-full text-white`}>
                        {item?.status}
                      </span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default page