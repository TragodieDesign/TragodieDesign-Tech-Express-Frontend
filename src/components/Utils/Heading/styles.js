import styled from 'styled-components'

 export const TitleBox=styled.div`
    margin-bottom: ${(props)=>(props.mb ? '4rem':'2rem')};
    font-family: ${(props) =>
        props.font
            ?({theme}) => theme.fonts.font2
            :({theme}) => theme.fonts.font1};
    text-align: ${(props)=>props.align || 'center'};
 `