import React from 'react'
import { useState, useEffect } from 'react';
import { Main } from '../../../ContainerStyled';
import { CharacterList } from '../../../CharacterListStyled';
import { Link } from 'react-router-dom';



export default function Container() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(dados => {
      setCharactersData(dados.results)});
  }, [])

  return (
    <Main>

    {charactersData.map(results => {
      return(
        <Link to={`/detalhes/${results.id}`} style={{textDecoration: 'none', margin: 'auto'}}>
          <CharacterList>
            <div style={{position: 'relative', width: '90%'}}>
              <h3>{results.id}</h3>
              <img src={results.image} alt="" />
              <h3>{results.name}</h3>
              <span>Status: {results.status}</span>
            </div>
          </CharacterList>
        </Link>
      )
    })}

    </Main>
  )
}
