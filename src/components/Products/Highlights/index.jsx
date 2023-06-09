import { Col, Container, Row } from 'react-bootstrap'
import {Card} from 'src/components/All'
import img from 'public/Iphone_apple.jpg'
import * as Styled from './styles'

const Highlights = ()=>{
    return (
        <Container>
            <Styled.Flexrow>
                <Col lg={4}>
                    <Card 
                        img={img} 
                        title="Iphone 14"
                        price= {parseInt(8999)}
                        alt="Iphone"
                        w="600"
                        h="600" 
                    />
                               
                </Col>
                <Col lg={4}>
                    <Card 
                        img={img} 
                        title="Iphone 14"
                        price= {parseInt(8999)}
                        alt="Iphone"
                        w="600"
                        h="600" 
                    />
                               
                </Col>
                <Col lg={4}>
                    <Card 
                        img={img} 
                        title="Iphone 14"
                        price= {parseInt(8999)}
                        alt="Iphone"
                        w="600"
                        h="600" 
                    />
                               
                </Col>
            </Styled.Flexrow>
        </Container>
    )
}
export default Highlights