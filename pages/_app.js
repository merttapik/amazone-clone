import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider
   serverUrl={process.env.REACT_APP_SERVER_URL}
   appId={process.env.REACT_APP_APPLICATION_ID}
   initializeOnMount={false}
  >
    <Component {...pageProps} />
  </MoralisProvider>
  
  )
}

export default MyApp
