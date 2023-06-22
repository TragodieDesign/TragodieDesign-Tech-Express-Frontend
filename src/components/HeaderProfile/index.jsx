import Link from 'next/link'
import * as Styled from './styles'
import { Container } from 'react-bootstrap'
import { SearchAlt2 } from '@styled-icons/boxicons-solid/SearchAlt2'
import {UserCircle} from '@styled-icons/boxicons-solid/UserCircle'
import {ShoppingCart} from '@styled-icons/heroicons-solid/ShoppingCart'
import {useContext} from 'react'
import { AuthContext } from '../All'
const HeaderProfile =() =>{
  const{user} = useContext(AuthContext)
  return (
    <Styled.Profile>
      <Styled.Box>
        <SearchAlt2 size="30" className="icon"/>
        </Styled.Box>
        <Styled.Box>
        <div><UserCircle size="30" className="icon"/></div>
        <div>
        {user ? (
          <Link href='/account'>
            Minha conta
          </Link>
        ) : (
          <Link href="/login">
            Entrar
          </Link>
        )
      }

      </div>
        </Styled.Box>
        <Styled.Box>
        <ShoppingCart size="30" className="icon"/>
      </Styled.Box>
    </Styled.Profile>
  )
  
}
export default HeaderProfile
