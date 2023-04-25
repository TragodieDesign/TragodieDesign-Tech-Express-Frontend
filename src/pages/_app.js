import { GlobalStyle } from '../styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
  <Component {...pageProps} />
  </ThemeProvider>
  )

}
