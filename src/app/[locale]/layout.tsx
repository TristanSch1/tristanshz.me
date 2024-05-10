import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { RegularLayout } from "@/components/layout/regular-layout";
import { LOCALES, ParamsWithLocale } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import { metadataFromTranslations } from "@/utils/metadata";
import { PageAnimatePresence } from "@/components/page-animate-presence";

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const drukWide = localFont({
  src: [
    {
      path: "../../fonts/DrukWide-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/DrukWide-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-druk-wide",
});

export const generateMetadata = metadataFromTranslations("default");

export const generateStaticParams = () => {
  return LOCALES.map((locale) => {
    locale;
  });
};

const RootLayout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: ParamsWithLocale;
}>) => {
  unstable_setRequestLocale(params.locale);
  return (
    <html lang={params.locale}>
      <body
        className={`${IBMPlexMono.variable} ${drukWide.variable} bg-background`}
      >
        <RegularLayout>{children}</RegularLayout>
      </body>
    </html>
  );
};

export default RootLayout;
