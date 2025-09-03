import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicons (se quiser pode mover daqui também) */}
        <link 
          rel="icon" 
          sizes="192x192" 
          href="https://static.wixstatic.com/media/d7e284_a2ca857a38014118aed45edecd614103%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/d7e284_a2ca857a38014118aed45edecd614103%7Emv2.png" 
          type="image/png" 
        />
        <link 
          rel="shortcut icon" 
          href="https://static.wixstatic.com/media/d7e284_a2ca857a38014118aed45edecd614103%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/d7e284_a2ca857a38014118aed45edecd614103%7Emv2.png" 
          type="image/png" 
        />
        <link 
          rel="apple-touch-icon" 
          href="https://static.wixstatic.com/media/d7e284_a2ca857a38014118aed45edecd614103%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/d7e284_a2ca857a38014118aed45edecd614103%7Emv2.png" 
          type="image/png" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
