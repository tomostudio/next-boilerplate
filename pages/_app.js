import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { AppWrapper } from '../context/state.js';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter>
        <AppWrapper>
        <Component {...pageProps} key={router.asPath} />
        </AppWrapper> 
      </AnimatePresence>
    </>
  )
}