import '../styles/globals.css'
import App from 'next/app'
import Navbar from './components/Navbar/Navbar'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
  
         <Component {...pageProps} />
  
   )
}