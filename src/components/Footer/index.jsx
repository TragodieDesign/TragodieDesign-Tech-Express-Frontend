import Link from 'next/link'
import * as Styled from './styles'
import { Container } from 'react-bootstrap'




export default function Footer(){
  return (
<Styled.Footer>
    <Container>
    <footer>
    <p>
    Phantom Tech, &copy; 2023
    </p>
  </footer>
    </Container>
</Styled.Footer>
  )
}
