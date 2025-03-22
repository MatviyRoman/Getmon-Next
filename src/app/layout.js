import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  canonical: "https://getmon.pl/",
  title: "Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl",
  description: "Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!",
  keywords: "моніторинг, аналітика, GetMon",
  authors: [
    {
      name: "Roman Matviy",
      url: "https://roman.matviy.pp.ua",
    },
  ],
  openGraph: {
    title: "Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl",
    description: "Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!",
    url: "https://getmon.pl",
    siteName: "GetMon",
    // images: [
    //   {
    //     url: "https://getmon.pl/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "GetMon – SEO оптимізований сайт",
    //   },
    // ],
    url: "https://getmon.pl/",
    locale: "pl_PL",
    type: "website",
  },
};


{/*
<meta property="article:modified_time" content="2023-03-11T14:53:48+00:00"/>
<meta name="twitter:card" content="summary_large_image"/>
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://getmon.pl/","url":"https://getmon.pl/","name":"Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl","isPartOf":{"@id":"https://getmon.pl/#website"},"datePublished":"2023-02-28T19:08:51+00:00","dateModified":"2023-03-11T14:53:48+00:00","description":"Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!","breadcrumb":{"@id":"https://getmon.pl/#breadcrumb"},"inLanguage":"pl-PL","potentialAction":[{"@type":"ReadAction","target":["https://getmon.pl/"]}]},{"@type":"BreadcrumbList","@id":"https://getmon.pl/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Strona główna"}]},{"@type":"WebSite","@id":"https://getmon.pl/#website","url":"https://getmon.pl/","name":"Getmon","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://getmon.pl/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"pl-PL"}]}</script>*/}


{/* <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://getmon.pl/","url":"https://getmon.pl/","name":"Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl","isPartOf":{"@id":"https://getmon.pl/#website"},"datePublished":"2023-02-28T19:08:51+00:00","dateModified":"2023-03-11T14:53:48+00:00","description":"Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!","breadcrumb":{"@id":"https://getmon.pl/#breadcrumb"},"inLanguage":"pl-PL","potentialAction":[{"@type":"ReadAction","target":["https://getmon.pl/"]}]},{"@type":"BreadcrumbList","@id":"https://getmon.pl/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Strona główna"}]},{"@type":"WebSite","@id":"https://getmon.pl/#website","url":"https://getmon.pl/","name":"Getmon","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://getmon.pl/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"pl-PL"}]}</script> */}


import Header from '@/partials/Header';
import Footer from "@/partials/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <link
          rel="icon"
          href="/img/cropped-getmon_fav-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/img/cropped-getmon_fav-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/img/cropped-getmon_fav-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/img/cropped-getmon_fav-270x270.png"
        />
        <meta name="google-site-verification" content="99RlA_3wOmqBTKgzLHvHZVDkup8MRCWjPPqEuab81RE" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
