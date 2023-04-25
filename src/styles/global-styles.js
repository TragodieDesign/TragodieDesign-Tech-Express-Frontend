import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    @media (max-width:1199.92px){
        font-size: 93.75%; //16px
    }
    @media (max-width:767.92px){
        font-size: 87.5%
    }
}




body{
    font-family: ${({ theme})=> theme.fonts.font1};
    font-size:1rem;
}


`