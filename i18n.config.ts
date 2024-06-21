import { createSharedPathnamesNavigation } from "next-intl/navigation";
export const locales = ["en", "fr", "id", "my", "nl"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    "en": "English",
    "fr": "Française",
    "id": "Bahasa",
    "my": "Melayu",
    "nl": "Netherlands"
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });