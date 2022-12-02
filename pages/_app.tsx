import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useEffect} from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
      require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min");
  },[])
  return <Component {...pageProps} />
}

export default MyApp
