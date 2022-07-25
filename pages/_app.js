import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import theme from '../lib/theme';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Head>
            <title>Al&apos;s Homepage</title>
            <link rel="icon" href="images/punk6068.png" />
          </Head>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website;