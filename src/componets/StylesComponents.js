import React, { Component } from 'react'
import styled,{keyframes} from 'styled-components'
import './GlobalsStyles.css'

 class StylesComponents extends Component {
    render() {
        const colorTexto={
            color:'white'
        }
        const animaTexto=keyframes`
        from{
            color:white;
        }
        to{
            color:black;
        }`
    
        const Titulo=styled.h1`    
        color:${colorTexto.color};
        font-size:40px;
        background-color:var(--colorFondo);
        &:active{
            color:black;
        } 
        @media(min-width:800px){
            background-color:black;
        }
        animation:${animaTexto} 1s linear infinite;
      
      `
        return (
            <>
                <Titulo>Estamos en styles components</Titulo>

            </>
        )
    }
}

export default StylesComponents