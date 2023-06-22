import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { GlobalStyle } from '../styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '@/styles/globals.css'
import {TitleBox,
  Header,
  Nav, 
  SliderList,
  Footer, 
  Heading, 
  Card, 
  Highlights, 
  HeaderProfile,
  Section,
  Banners,
  Individual,
  SingleProduct,
  AllProducts
  } from '../components/All'
  import {AuthProvider, AuthContext} from '../../context/AuthContext'



export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>    
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Header/>
  <Component {...pageProps} />
  <Footer/>
  </ThemeProvider> 
    </AuthProvider> 
    /**
     * removi o store Provider, 
     * caso ocorra um erro, 
     * corrigir envelopando a aplicação com
     * <Provider store={store}>
     * </Provider>
     * 
     *  */   
  )
}
