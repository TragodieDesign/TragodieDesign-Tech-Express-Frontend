import styled from 'styled-components'

export const Title =styled.div `
margin-bottom: 2rem;
.center{
  text-align: center;
}
`
export const SlideBox =styled.div `
  .swiper-button{
    &-prev,
    &-next{
      top:50%;
      color:#32BE14;
      background: #353535;
      width:2.5rem;
      height:2.5rem;
      border-radius:50%;
      &:after{
        font-size:1.3rem;
        margin: 0 -3px 0 -3px;
      }
    }
    &-prev{
      top:50%
      color:#e2e2e2;
      background: #353535;
      width:2.5rem;
      height:2.5rem;
      border-radius:50%;
      &:after{
        margin: 0 -3px 0 -3px;
      }
    }
  }


`
