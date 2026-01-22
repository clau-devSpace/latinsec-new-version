import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";
import SplashScreen from "@/components/SplashScreen";

export const metadata = {
  title: "LatinSec",
  description: "Empresa de seguridad",
};

const SPLASH_MS = 3000;

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      data-splash="1"
      style={{
        "--global-ae-delay": `${SPLASH_MS}ms`,
        "--splash-ms": `${SPLASH_MS}ms`,
      }}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WVHM9KW');`,
          }}
        />
        {/* Google Tag Manager End */}
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WVHM9KW"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* Google Tag Manager (noscript) End */}

        {/* Splash GLOBAL */}
        <SplashScreen duration={SPLASH_MS} />

        <Navbar />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
