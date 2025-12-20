// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  canonical: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}`,
  alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}`,
  },
  title: "Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl",
  description: "Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!",
  keywords: "Montaż klimatyzacji, instalacja anten RTV, Wrocław, GetMon",
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  authors: [
    {
      name: "Roman Matviy",
      url: "https://roman.matviy.pp.ua",
    },
    {
      name: "APARTNER.PRO",
      url: "https://apartner.pro",
    },
  ],
  openGraph: {
    title: "Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl",
    description: "Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!",
    url: `${process.env.NEXT_PUBLIC_URL || 'https://getmon.pl'}`,
    siteName: "GetMon",
    // images: [
    //   {
    //     url: "https://getmon.pl/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "GetMon – SEO оптимізований сайт",
    //   },
    // ],
    locale: "pl_PL",
    type: "website",
  },
  other: {
    'article:modified_time': '2023-03-11T14:53:48+00:00',
    // 'article:modified_time': new Date().toISOString(), // Use current date for demo purposes
  },
};


{/*
<meta property="article:modified_time" content="2023-03-11T14:53:48+00:00"/>
<meta name="twitter:card" content="summary_large_image"/>
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://getmon.pl/","url":"https://getmon.pl/","name":"Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl","isPartOf":{"@id":"https://getmon.pl/#website"},"datePublished":"2023-02-28T19:08:51+00:00","dateModified":"2023-03-11T14:53:48+00:00","description":"Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!","breadcrumb":{"@id":"https://getmon.pl/#breadcrumb"},"inLanguage":"pl-PL","potentialAction":[{"@type":"ReadAction","target":["https://getmon.pl/"]}]},{"@type":"BreadcrumbList","@id":"https://getmon.pl/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Strona główna"}]},{"@type":"WebSite","@id":"https://getmon.pl/#website","url":"https://getmon.pl/","name":"Getmon","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://getmon.pl/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"pl-PL"}]}</script>*/}


{/* <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://getmon.pl/","url":"https://getmon.pl/","name":"Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl","isPartOf":{"@id":"https://getmon.pl/#website"},"datePublished":"2023-02-28T19:08:51+00:00","dateModified":"2023-03-11T14:53:48+00:00","description":"Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!","breadcrumb":{"@id":"https://getmon.pl/#breadcrumb"},"inLanguage":"pl-PL","potentialAction":[{"@type":"ReadAction","target":["https://getmon.pl/"]}]},{"@type":"BreadcrumbList","@id":"https://getmon.pl/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Strona główna"}]},{"@type":"WebSite","@id":"https://getmon.pl/#website","url":"https://getmon.pl/","name":"Getmon","description":"","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://getmon.pl/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"pl-PL"}]}</script> */}


import Header from '@/components/header/Header';
import Footer from "@/components/footer/Footer";

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
        {/* <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" /> */}
        {/* <meta property="article:modified_time" content="2023-03-11T14:53:48+00:00" /> */}
        <meta name="google-site-verification" content="99RlA_3wOmqBTKgzLHvHZVDkup8MRCWjPPqEuab81RE" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MPBL4BL');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPBL4BL"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
