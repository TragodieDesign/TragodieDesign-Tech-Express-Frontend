import { Col, Container, Row } from 'react-bootstrap'
import {Card} from 'src/components/All'

import * as Styled from './styles'
import {useEffect, useState} from 'react'
import {Http} from 'src/Http/api'


const Highlights = ()=>{
    const [data, setData] = useState([])
const get_products =async () =>{
	try{
		const response =await Http.get(
			'products'
		)
		setData(response.data)
		}
		catch(Error){
			console.log(Error)
		}
	
}

	
useEffect(() =>{
	get_products()
},[])

    return (
        <Container>
            <Styled.Flexrow>
                {data?.map((products)=>{
                    return(
                <Col lg={4} key={products.id}>
                <Card 
                    img={products.image.alternativeText} 
                    alt="produtos"
                    title={products.title}
                    price= {parseInt(products.price)}
                    w="600"
                    h="600" 
                />
                           
            </Col>
                    )

            })}


            </Styled.Flexrow>
        </Container>
    )
}
export default Highlights