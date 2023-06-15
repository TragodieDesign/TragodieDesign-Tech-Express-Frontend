import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import * as Styled from './styles'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from "swiper";

export default function Banners() {
  return (
    <Container>
            <Styled.SliderWrapper className="banner-wrapper">
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="banner">
            <Image 
            src="https://res.cloudinary.com/dx92aia72/image/upload/c_scale,w_1200/v1682558938/banners/banner_3_ftzoba.png"
            alt="banner"
            width={1440}
            height={810}>
            </Image>
        </SwiperSlide>
        <SwiperSlide className="banner">            
          <Image 
            src="https://res.cloudinary.com/dx92aia72/image/upload/c_scale,w_1200/v1682558936/banners/banner_1_vsgmr4.png"
            alt="banner"
            width={1440}
            height={810}>
            </Image>
            </SwiperSlide>
        <SwiperSlide className="banner">            
          <Image 
            src="https://res.cloudinary.com/dx92aia72/image/upload/c_scale,w_1200/v1682558936/banners/banner_2_f3xxkl.png"
            alt="banner"
            width={1440}
            height={810}>
            </Image>
            </SwiperSlide>

      </Swiper>
            </Styled.SliderWrapper>
    </Container>
  );
}