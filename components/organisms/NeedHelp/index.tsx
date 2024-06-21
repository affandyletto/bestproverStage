import React from 'react'
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import { Container2 } from '@/components/molecules'

const NeedHelp = () => {
    const locale = useLocale() as Locale;
    return (
        <Container2
            title="Need help?"
            desc="Contact our team of experts now and get advice on everything to do with trustprover."
            btn="Contact Us"
            url={`/${locale}/contact`}
        />
    )
}

export default NeedHelp