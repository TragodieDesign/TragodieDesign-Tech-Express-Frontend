import styled from "styled-components"

export const Nav  = styled.nav `

.container {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}`
export const Ul = styled.ul `display: flex;
justify-content: space-between;
align-items: center;
gap: 1em;

`
export const Li = styled.li `
display: flex;
justify-content: center;
align-items: center;
margin: 1em;
&:hover {
    color: #32BE14;
    transition:ease 0.4s all;

}
`