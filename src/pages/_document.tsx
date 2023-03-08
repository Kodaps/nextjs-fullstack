import { Header } from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="night">
      <Head />
      <body>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
