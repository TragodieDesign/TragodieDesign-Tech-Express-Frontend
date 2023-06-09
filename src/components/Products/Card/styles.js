import styled from "styled-components";
export const Card = styled.div`
width: 100%;
position: relative;
    &:hover{
        img{
            transform:scale(1.1);
        }
        .card-box{
            &:after{
                height: 100%;
                background-color: rgba(0,0,0,0.5)
            }
        }
        .card-actions{
            opacity:1;
            top:50%;
            transition: 0.4s;
        }
        
    }
`

export const Box = styled.div`
width: 100%;
position: relative;
overflow: hidden;
    img{
        transition:all 500ms cubic-bezier(1, 0.01, 0, 1.07);
        transition-timing-function: cubic-bezier(1, 0.01, 0, ).
    }
    &:after{
        content:'';
        position: absolute;
        width: 100%;
        height: 0;
        bottom: 0;
        left:0; 
        background-color: rgba(0,0,0,0);
        z-index: 4;
        transition:all 500ms cubic-bezier(1, 0.01, 0, 1.07);
        transition-timing-function: cubic-bezier(1, 0.01, 0, ).


    }
`

export const Actions = styled.div`
position: absolute;
top:70%;
transform:translateY(-50%);
display:flex;
justify-content: center;
align-items: center;
width: 100%;
left:0;
gap:1rem;
opacity: 0;
z-index:5;
transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07;);
transition-timing-function: cubic-bezier(1, 0.01,0, 1,07);


`
export const Icon = styled.span`
    cursor:pointer;
    width:3rem;
    height:3rem;
    border-radius:50%;
    background-color: #e3e3e3;
    display:flex;
    align-items: center;
    justify-content: center;
    transition: ease 0.4s all;
    .icon{
        height: 1.5rem;
        color: #32BE14;
        transition: ease 0.5s all;
    }
    &:hover{
        transform:scale(1.1);
    }
`

export const Content = styled.div`
    width: 100%;
    padding: 0.5rem 0;
`
export const Title= styled.h3`
    font-size: 1.2rem;
    color: #353535;
    font-weight: 900;

`
export const Price= styled.span`
    font-size: 1.0rem;
    color: red;
    font-weight: 900;
    
`
