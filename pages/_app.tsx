import '../styles/globals.css'
import type { AppProps } from 'next/app'
import JSBI from 'jsbi';
const modulePath = require.resolve('jsbi');
console.log(modulePath);


function MyApp({ Component, pageProps }: AppProps) {
  const x: JSBI = JSBI.BigInt(Math.floor(Math.random() * 10000));
  console.log(x);
  return <Component {...pageProps} />
}

export default MyApp
