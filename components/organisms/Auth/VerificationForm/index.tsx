'use client'
import React, { useState } from 'react'
import { Buttons, Headings } from '@/components/atoms'
import { ModalSelectCompanies } from '@/components/molecules';
import { RiAlertFill, RiCloseCircleFill, RiCheckboxCircleFill } from "react-icons/ri";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const VerificationForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      verification_code: '',
    },
    validationSchema: Yup.object({
      verification_code: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: values => {
      setOpenModal(true)
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <ModalSelectCompanies
        open={openModal}
        setOpen={setOpenModal}
      />
      <section className="bg-white p-4 lg:p-6">
        <div className="flex justify-center items-start p-4 lg:py-[70px] lg:pt-[72px] bg-gray-300 rounded-md lg:rounded-df lg:min-h-[796px]">
          <div className="bg-white rounded-md lg:rounded-df lg:w-[580px] p-8">
            <div className="mb-5">
              <Headings control="h5" text="Please type code we just sent" className="mb-2" />
              <p className="text-base text-gray-500">We have sent 6 digits code to <span className="text-black-500">jonathandoeimanuel@gmail.com</span></p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="input_verification" className="block text-base font-semibold text-black-500 mb-2">
                  Verification Code
                </label>
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="verification_code"
                      className={`w-full py-4 px-6 bg-gray-200 border rounded-full text-sm text-black-500 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 ${formik.touched.verification_code && formik.errors.verification_code ? ' border-red-500' : 'border-gray-200'}`}
                      placeholder="Enter your your verification code"
                      {...formik.getFieldProps('verification_code')}
                    />
                    {formik.touched.verification_code && formik.errors.verification_code && (
                      <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
                        <RiCloseCircleFill className="text-red-500" />
                      </div>
                    )}
                    {
                      formik.isValid && formik.dirty && (
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
                          <RiCheckboxCircleFill className="text-green-500" />
                        </div>
                      )
                    }
                  </div>
                  {formik.touched.verification_code && formik.errors.verification_code ? (
                    <div className="flex justify-start items-center text-sm text-red-500 mt-2">
                      <RiAlertFill />
                      <span className="ml-2">{formik.errors.verification_code}</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mb-4">
                <Buttons
                  control="primary"
                  type="submit"
                  className="py-[18px] lg:py-4 w-full"
                  text="Verifying"
                />
              </div>
              <div className="">
                <Buttons
                  control="secondary"
                  type="button"
                  className="py-[18px] lg:py-4 w-full"
                  text="Get New Code"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default VerificationForm