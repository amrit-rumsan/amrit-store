import { ProductContextProvider } from '../context/AppContext'
import '../styles/globals.css'
import { GlobalStyle } from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>

    </>
  )
}

export default MyApp
