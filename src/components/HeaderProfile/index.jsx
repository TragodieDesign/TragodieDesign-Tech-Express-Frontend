import Link from 'next/link'
import * as Styled from './styles'
import { Container } from 'react-bootstrap'
import { SearchAlt2 } from '@styled-icons/boxicons-solid/SearchAlt2'
import {UserCircle} from '@styled-icons/boxicons-solid/UserCircle'
import {ShoppingCart} from '@styled-icons/heroicons-solid/ShoppingCart'
const HeaderProfile =() =>{
  return (
    <Styled.Profile>
      <Styled.Box>
        <SearchAlt2 size="30" className="icon"/>
        <UserCircle size="30" className="icon"/>
        <ShoppingCart size="30" className="icon"/>
      </Styled.Box>
    </Styled.Profile>
  )
  
}
export default HeaderProfile
