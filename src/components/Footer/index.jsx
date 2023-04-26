import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Row>
          <Col xl={3} lg={3} md={6} sm={6} xs={12} className="d-flex align-items-center">
            <Widget>
              <About>
                <Logo src="/Site-e-commerce/img/logo/4x/Logo TEch Express.png" height="60em" alt="Tech express" />
                <p className="pt-4">Bem-vindo à TechExpress, a sua loja online de produtos eletrônicos de confiança! Fundada em 2006, a TechExpress tem se dedicado a oferecer a melhor seleção de eletrônicos para nossos clientes em todo o país.</p>
              </About>
            </Widget>
          </Col>
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <Widget>
              <Title>Categorias</Title>
              <LinkList>
                <li><a href="/Site-e-commerce/Categorias/celulares.html">Celulares</a></li>
                <li><a href="/Site-e-commerce/Categorias/eletronicos.html">Eletrônicos</a></li>
                <li><a href="/Site-e-commerce/Categorias/informatica.html">Informática</a></li>
              </LinkList>
            </Widget>
          </Col>
          <Col xl={3} lg={3} md={6} sm={6} xs={12}>
            <Widget>
              <Title>Páginas</Title>
              <LinkList>
                <li><a href="/Site-e-commerce/index.html">Home</a></li>
                <li><a href="/Site-e-commerce/Carrinho/index.html">Carrinho</a></li>
                <li><a href="/Site-e-commerce/Finalizar/index.html">Finalizar Compra</a></li>
                <li><a href="/Site-e-commerce/Sobre/index.html">Sobre nós</a></li>
              </LinkList>
            </Widget>
          </Col>
        </Row>
      </Container>
      <FooterBottom>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center justify-content-center">
              <CopyRight>CopyRight&copy; 2023 Design by <a href="#">BrunoFatecano</a> . All Rights Reserved.</CopyRight>
            </Col>
          </Row>
        </Container>
      </FooterBottom>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  margin-top: 3em;
`;

const Widget = styled.div`
  margin-bottom: 2rem;
`;

const About = styled.div`
  img {
    height: 60em;
  }
`;

const Logo = styled.img`
  height: 60em;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0.5rem;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const FooterBottom = styled.div`
  background-color: #000;
  color: #fff;
  padding: 1.5`;
