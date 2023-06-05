import styled from 'styled-components'
import styles from './styles'
import Image from 'next/image'
import { HeaderProfile } from '../All'
import Nav from "../Nav"
import Logo from './Logo'
import { Container } from 'react-bootstrap'


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:  1rem 0 1rem 0;
  background-color: #353535;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width:100%;
  font-family: 'Montserrat', sans-serif;
  font-family: 600;
  color: white;
`





const Link = styled.a`
  font-size: 1.2rem;
  color: #white;
  text-decoration: none;
  &:hover {
    color: #666666;
  }
`

export default function Header() {
  return (
    <Container>
          <HeaderContainer>
      
      <Logo/>
      <Nav/>
      <HeaderProfile/>
      
    </HeaderContainer>
    </Container>
  )
}