import { MainProvider } from '../components/contexts/Main';
import '../public/style/style.css';
import '../scss/app.scss';
export default function App({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}