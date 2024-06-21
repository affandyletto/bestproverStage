'use client'
import React from 'react'
import { Link } from "@/i18n.config";
import Image from 'next/image'
import { Buttons, Headings } from '@/components/atoms'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { RiAlertFill } from "react-icons/ri";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <section className="bg-white p-4 lg:p-6">
      <div className="flex justify-center items-center p-4 lg:py-[70px] bg-gray-300 rounded-md lg:rounded-df">
        <div className="bg-white rounded-md md:rounded-df md:w-[580px] p-8">
          <div className="mb-5">
            <Headings control="h5" text="Login to your account" />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-base font-semibold text-black-500 mb-2">E-Mail</label>
              <input
                type="email"
                id="email"
                className={`w-full py-4 px-6 bg-gray-200 border rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 ${formik.touched.email && formik.errors.email ? ' border-red-500' : 'border-gray-200'}`}
                placeholder="Enter your e-mail"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="flex justify-start items-center text-sm text-red-500 mt-2">
                  <RiAlertFill />
                  <span className="ml-2">{formik.errors.email}</span>
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-base font-semibold text-black-500 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`w-full py-4 px-6 bg-gray-200 border rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-200'}`}
                  placeholder="Enter your password"
                  {...formik.getFieldProps('password')}
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="flex justify-start items-center text-sm text-red-500 mt-2">
                  <RiAlertFill />
                  <span className="ml-2">{formik.errors.password}</span>
                </div>
              ) : null}
            </div>
            <div className="mb-5 text-right">
              <Link href="/auth/forgot-password" className="text-base font-semibold text-black-500">
                Forgot Password
              </Link>
            </div>
            <div className="mb-8">
              {
                formik.isValid && formik.dirty ? (
                  <Buttons control="primary" type="submit" text="Login" className="py-[18px] lg:py-4 w-full" />
                ) : (
                  <Buttons control="disabled" type="button" text="Login" className="py-[18px] lg:py-4 w-full" />
                )
              }
            </div>
          </form>
          <div className="relative border border-gray-150">
            <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 text-sm text-gray-500 bg-white px-2">
              or using
            </span>
          </div>
          <div className="mt-8 mb-4">
            <Buttons control="secondary" type="button" text={<TextFacebook />} className="py-[18px] lg:py-4 w-full disabled" />
          </div>
          <div className="mb-5">
            <Buttons control="secondary" type="button" text={<TextGoogle />} className="py-[18px] lg:py-4 w-full disabled" />
          </div>
          <div className="text-base text-center">
            <span className="text-gray-500">Don&apos;t have an account?</span><Link href="/auth/signup" className="text-black-500 font-semibold ml-2">Sign Up</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm

const TextFacebook = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/icons/icon-facebook-1.webp"
        width={24}
        height={24}
        alt="icon"
        className="h-6 mr-3"
      /> Continue with Facebook
    </div>
  )
}

const TextGoogle = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/icons/icon-google-1.webp"
        width={24}
        height={24}
        alt="icon"
        className="h-6 mr-3"
      /> Continue with Google
    </div>
  )
}