import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { GlobalStyle } from '../styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '@/styles/globals.css'
import {Header} from '../components/All'

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Header/>
  <Component {...pageProps} />
  </ThemeProvider>
      </Provider>      
  )

}
