import React from 'react'
import { useState, useEffect } from 'react';
import { Main } from '../ContainerStyled';
import { CharacterList } from '../CharacterListStyled';

export const nome = 'teste'

export default function Container() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(dados => {
      console.log(dados.results);
      setCharactersData(dados.results)});
  }, [])

  return (
    <Main className='container'>

    {charactersData.map(results => {

      
      return(
        <CharacterList>
          <h3>{results.id}</h3>
          <img src={results.image} alt="" />
          <h3>{results.name}</h3>
          <span>Status: {results.status}</span>

        </CharacterList>
      )
    })}

    </Main>
  )
}
