import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cabecalho from '../pages/Home/Cabecalho'
import { EstiloDetalhe } from '../../EstiloDetalhe'



export default function Detalhes() {
  const {id} = useParams()
  const [detalhes, setDetalhes] = useState([])

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}/`)
    .then(response => 
      response.json()
     )
    .then(dados => {
      const detalhes = {
        id,
        img: dados.image,
        nome: dados.name,
        especie: dados.species

      }
      setDetalhes(detalhes)
      console.log(detalhes)
    })
  }, [id]) // Colocamos a variavel ID como uma dependencia porque a requisição deve ser realizada pelo useEffect toda vez que o id mudar.


  return (
    <>
      <Cabecalho/>
      <EstiloDetalhe>
        <div style={{position: 'absolute', color: "#fff", width: '80%'}}>
          <h3>{detalhes.id}</h3>
          <img src={detalhes.img} alt="" />
          <h2>{detalhes.nome}</h2>
          <span>Specie: {detalhes.especie}</span>
        </div>
      </EstiloDetalhe>
    </>
  )
}
