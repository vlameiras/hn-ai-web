import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <script defer src="/_vercel/insights/script.js"></script>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
