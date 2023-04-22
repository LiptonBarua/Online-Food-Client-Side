import ShareProvider from '@/ShareProvider/ShareProvider'
import Header from '/Components/Header/Header'
import '@/styles/globals.css'
import Footer from '@/Components/Footer/Footer'

export default function App({ Component, pageProps }) {
  return <div>
   <ShareProvider>
   <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
   </ShareProvider>
  </div>
}
