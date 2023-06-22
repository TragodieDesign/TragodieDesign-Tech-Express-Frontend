import styled from "styled-components"

export const Profile  = styled.div `
 display: flex;
    justify-content: space-around;
    align-items: center;
    gap:3em;
`
export const Box = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-align:center
position:relative;
cursor:pointer;
.icon{
    transition:ease 0.4s all;
}
&:hover .icon{
    color: #32BE14;
    transition{0,5s}

}
`

