import React from 'react'
import styled,{css,keyframes,ThemeProvider, createGlobalStyle} from "styled-components"


export default function ComponentesEstilizados(){
    //css con styled-components
    let mainColor="#db7093",
    mainAlphaColor89="#db709380";
 //para estilizar el boton la propiedad   ${({props}) => props.isButton && css`
    const SetTransitionTime =(time)=>`all ${time} ease-in-out`;
    //variable para animaciones
    const fadein=keyframes`
        0%{
            opacity:0%;
        }

        100%{
            opacity:1;
        }
    `
    const Myh3 =styled.h3`
    padding:2rem;
    text-align:center;
    color: ${({color}) =>color};
    color: ${({color}) =>color || "#000"} ;
    background-color: ${mainColor};
    transition: ${SetTransitionTime("1s")};
    animation: ${fadein} 5s ease-out;
   
    ${({isButton}) => isButton && css`
    margin:auto;
    max-width:50%;
    border-radius:0.25rem;
    cursor:pointer;
    `}

    &:hover{
        background-color: ${mainAlphaColor89};
    }
    `;
    

    const light = {
        color: "#222",
        bgColor: "#DDD",
      };
    
      const dark = {
        color: "#DDD",
        bgColor: "#222",
      };
    
      const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.bgColor};
      `;

      //herando de box
      const BoxRounded = styled(Box)`
      border-radius: 1rem;
    `;


    //lo ideal es hacerlo en App.js o index.js
    const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
  `;
    return (
        <>
        <GlobalStyle/>
            <h2>styled-components</h2>
            <Myh3>Hola soy un h3 con un styled-components</Myh3>
            <Myh3 color="#61dafb">Hola soy un h3 con un styled-components</Myh3>
            <Myh3 isButton>Soy un h3 estilizado como botón</Myh3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja light</Box>
                <BoxRounded>Soy una caja redondeada light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxRounded>Soy una caja redondeada dark</BoxRounded>
            </ThemeProvider>

        </>
    )
}