import '../styles/globals.css'
import { useEffect } from 'react'
import { Provider } from 'react-redux';
import store from '../reducer/store';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}

export default MyApp
