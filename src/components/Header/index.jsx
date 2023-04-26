import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #353535;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width:100%;
  font-family: 'Montserrat', sans-serif;
  color: white;
`

const Logo = styled.img`
  height: 60px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
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
    <HeaderContainer>
      <Logo src="/Site-e-commerce/img/logo/4x/Logo TEch Express.png" alt="TechExpress" />
      <Nav>
      <Link href="/Site-e-commerce/index.html">Home</Link>
        <Link href="/Site-e-commerce/Categorias/celulares.html">Celulares</Link>
        <Link href="/Site-e-commerce/Categorias/eletronicos.html">Eletrônicos</Link>
        <Link href="/Site-e-commerce/Categorias/informatica.html">Informática</Link>
        <Link href="/Site-e-commerce/Carrinho/index.html">Carrinho</Link>
        <Link href="/Site-e-commerce/Finalizar/index.html">Finalizar Compra</Link>
        <Link href="/Site-e-commerce/Sobre/index.html">Sobre nós</Link>
      </Nav>
    </HeaderContainer>
  )
}