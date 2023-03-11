import React from 'react'
import { CabecalhoStyled } from '../../../CabecalhoStyled'
import logo from '../../../images/Rick-And-Morty-Logo.png'
import { Link } from 'react-router-dom'

export default function Cabecalho() {

  return (
    <header>
        <CabecalhoStyled>
            <Link to={'/'}>
            <img src={logo} alt="" />
            </Link>
            <form action="">
                <input type="search" placeholder='Search' />
            </form>
        </CabecalhoStyled>
    </header>
  )
}
