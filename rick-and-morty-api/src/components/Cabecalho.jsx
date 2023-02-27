import React from 'react'
import { CabecalhoStyled } from '../CabecalhoStyled'
import logo from '../images/Rick-And-Morty-Logo.png'

export default function Cabecalho() {

  return (
    <header>
        <CabecalhoStyled>
            <img src={logo} alt="" />
            <form action="">
                <input type="search" placeholder='Search' />
            </form>
        </CabecalhoStyled>
    </header>
  )
}
