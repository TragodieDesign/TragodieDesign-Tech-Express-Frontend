import styled from 'styled-components';


export const Navbar = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background-color: #353535;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
position: fixed;
width:100%;
font-family: 'Montserrat', sans-serif;
color: white;
.container{
    display: flex;
    justify-content: center;
    align-items: center;

}
ul{
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const Logo = styled.img`
  height: 2em;
`