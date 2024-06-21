import React from "react";
import { Link } from "@/i18n.config";
import { Buttons, Headings, ModalFrame } from "@/components/atoms";
import { RiTimeLine, RiStore2Line } from "react-icons/ri";
import { MdOutlineCheck } from "react-icons/md";

type Props = {
    open: boolean;
    setOpen: any;
};

const RegisterCompany = (props: Props) => {
    const { open, setOpen } = props;

    return (
        <ModalFrame
            open={open}
            setOpen={setOpen}
            frameClassName="bg-white w-[520px] rounded-3xl p-4 md:p-6 lg:p-8"
        >
            <div className="flex items-center justify-center mx-auto mb-5 text-white text-3xl w-[78px] h-[78px] rounded-full bg-green-500 ring-4 ring-green-500 ring-opacity-30">
                <MdOutlineCheck />
            </div>
            <div className="text-center mb-6">
                <Headings control="h4" text="Account will be reviewed" className="mb-4" />
                <p className="text-base text-gray-500">Our expert team will review your account and company details and get back to you shortly.</p>
            </div>
            <div className="mb-8">
                <p className="uppercase text-xs font-semibold text-black-1000 opacity-40 mb-3">Registered Company</p>
                <div className="flex items-center justify-between h-[84px] rounded-df bg-gray-300 p-4">
                    <div className="flex justify-start items-center">
                        <div className="flex justify-center items-center mr-4 w-[52px] h-[52px] bg-white rounded-full border border-gray-150">
                            <RiStore2Line className="text-2xl text-gray-500" />
                        </div>
                        <div className="">
                            <h6 className="text-base font-semibold text-black-500 mb-1">
                                Testarosa Coffe & Space
                            </h6>
                            <p className="text-sm font-normal text-gray-500 mb-0">
                                www.testproject.com
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-1.5 px-2 bg-white border border-gray-100 rounded-full">
                        <RiTimeLine /><span className="text-xs font-medium text-gray-500 ml-1">Pending</span>
                    </div>
                </div>
            </div>
            <div className="">
                <Buttons
                    control="primary"
                    type="submit"
                    text="Ok"
                    className="py-[18px] lg:py-4 w-full"
                />
            </div>
        </ModalFrame>
    );
};

export default RegisterCompany;
