export const i18n = {
    defaultLocale: "en",
    locales: ["en", "es", "bn-BD", "ar"],
} as const;

export type Locale = (typeof i18n)["locales"][number];