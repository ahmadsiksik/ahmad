import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../Store/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
 
  return(<div>
  <Head>
  <script src="/assets/js/jquery.min.js"></script>
  <script src="/assets/js/jquery.scrolly.min.js"></script>
  <script src="/assets/js/jquery.scrollex.min.js"></script>
  <script src="/assets/js/browser.min.js"></script>
  <script src="/assets/js/breakpoints.min.js"></script>
  <script src="/assets/js/util.js"></script>
  <script src="/assets/js/main.js"></script>
</Head> 
   <Provider store={store}><Component {...pageProps} /></Provider>
   </div>
  )
}

export default MyApp
