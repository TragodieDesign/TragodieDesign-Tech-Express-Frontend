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
                    <SwiperSlide>
                        <Card
                            img={img} 
                            title="Iphone 14"
                            price= {parseInt(8999)}
                            alt="Iphone"
                            w="600"
                            h="600"
                        >
                        </Card>
                    </SwiperSlide>  

           
                </Swiper>
                </Styled.SlideBox>
                

            </Container>

        </Section>
    )
}
export default SliderList