import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function App({ Component, pageProps }: AppProps) {
  return <ReCaptchaProvider><Component {...pageProps} /></ReCaptchaProvider>
}
