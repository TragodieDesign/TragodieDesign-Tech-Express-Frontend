import StyledComponents from 'styled-components'
import Link from 'next/link'
import * as Styled from './styles'
import { Container } from 'react-bootstrap'
import {menuLinks} from './data'


export default function Nav(){
  return (
      <Styled.Nav>
        <Container>
        <Styled.Ul>
        
        {menuLinks.map((item, index)=>(
          <Styled.Li key={index}>
          <Link legacyBehavior href={item.url}>
            <a>{item.title}</a>
          </Link>
        </Styled.Li>
        
        ) )}

        </Styled.Ul>
        </Container>
      </Styled.Nav>
  )
}
