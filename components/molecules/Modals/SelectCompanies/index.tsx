import React from "react";
import { Link } from "@/i18n.config";
import { Headings, ModalFrame } from "@/components/atoms";
import { RiCloseFill, RiStore2Line, RiBuildingLine } from "react-icons/ri";

type Props = {
    open: boolean;
    setOpen: any;
};

const SelectCompanies = (props: Props) => {
    const { open, setOpen } = props;

    return (
        <ModalFrame
            open={open}
            setOpen={setOpen}
            frameClassName="bg-white w-[580px] rounded-df p-4 md:p-6 lg:p-8"
        >
            <div className="flex justify-between items-start mb-5">
                <div>
                    <Headings control="h5" text="Please choose" className="mb-2" />
                    <p className="text-base text-gray-500">Select whether your company is already listed on trustprover or whether you want to register for the first time.</p>
                </div>
                <div 
                    className="text-2xl cursor-pointer" 
                    onClick={() => {
                        setOpen(false);
                    }}>
                    <RiCloseFill />
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-4">
                <Link href={'/auth/signup/company-detail'} className="block bg-white border border-gray-150 hover:bg-gray-150 rounded-df p-4 lg:p-6 mb-4 md:mb-0">
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full border border-gray-150 mb-6">
                        <RiStore2Line className="text-2xl text-blue-500" />
                    </div>
                    <div>
                        <h6 className="text-base font-semibold text-black-500 mb-2">
                            Create new company account
                        </h6>
                        <p className="text-base font-normal leading-df text-gray-500 mb-0">
                            Free registration to make your company visible on trustprover.
                        </p>
                    </div>
                </Link>
                <Link href={''} className="block bg-white border border-gray-150 hover:bg-gray-150 rounded-df p-4 lg:p-6">
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full border border-gray-150 mb-6">
                        <RiBuildingLine className="text-2xl text-blue-500" />
                    </div>
                    <div>
                        <h6 className="text-base font-semibold text-black-500 mb-2">
                            Connect with existing company account
                        </h6>
                        <p className="text-base font-normal leading-df text-gray-500 mb-0">
                            Claim your company now to utilize the full potential of trustprover.
                        </p>
                    </div>
                </Link>
            </div>
        </ModalFrame>
    );
};

export default SelectCompanies;
