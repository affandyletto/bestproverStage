import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { type Locale, locales } from "@/i18n.config";
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from "next-intl/server";
import "./globals.css";
import "@/public/fonts/general-sans.css";
import "@/public/fonts/switzer.css";

export const metadata: Metadata = {
  title: "Trustprover",
  description: "Find the most trusted companies.",
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  let messages;
  try {
    messages = (await import(`@/locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="mx-auto bg-white min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
