import ShareProvider from '@/ShareProvider/ShareProvider'
import Header from '/Components/Header/Header'
import '@/styles/globals.css'
import Footer from '@/Components/Footer/Footer'
import AuthProvider from '@/AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return <div>
  <QueryClientProvider client={queryClient}>
  {/* <Hydrate state={pageProps.dehydratedState}> */}
  <AuthProvider>
  <ShareProvider>
   <Header></Header>
    <Component {...pageProps} />
    <ToastContainer></ToastContainer>
    <Footer></Footer>
   </ShareProvider>
  </AuthProvider>
  </QueryClientProvider>
  </div>
}
