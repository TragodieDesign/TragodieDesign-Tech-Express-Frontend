import {useEffect, useState, useCallback} from 'react'
import {Http} from 'src/Http/api'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'
import {Section, TitleBox, Heading,Card} from 'src/components/All'
import * as Styled from './styles'
import { propTypes } from 'prop-types'
import { Navigation} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react'
import img from 'public/Iphone_apple.jpg'

import 'swiper/css'
import 'swiper/css/navigation'



const SliderList = (props)=>{
    const [data, setData] = useState([])
    const getProducts = useCallback(async()=>{
        try{
            const response = await Http.get(
                `products?_where[0][categories.slug]=${props.fetch}&_sort=createdAt:DESC&_limit=6`
            )
            setData(response.data)
            console.log(response.data)
            }
            
            catch(Error){
                console.log(Error)
            }
    },[props.fetch])  
    useEffect(() =>{
        getProducts()
    },[getProducts])
    return (
        <Section>
            <Container>
                <TitleBox font>
                    <Heading className="center">
                        {props.title}
                    </Heading>
                </TitleBox>
                <Styled.SlideBox>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={4}
                    >      
                    {data?.map((product)=>(
                                <SwiperSlide key={products.id}>
                                <Card
                                    img={product.image.alternativeText} 
                                    alt={product.image.name}
                                    title={product.title}
                                    price= {parseFloat(product.price)}
                                    
                                    w="600"
                                    h="600"
                                >
                                </Card>
                            </SwiperSlide>              
                    ))}

           
                </Swiper>
                </Styled.SlideBox>
                

            </Container>

        </Section>
    )
}
    SliderList.propTypes={
        fetch:PropTypes.string,
        title:PropTypes.string
    }
export default SliderList