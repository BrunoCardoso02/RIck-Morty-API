import React from 'react'
import { useState, useEffect } from 'react';

export default function Container() {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/character';
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((dados)=>{
            console.log(dados)
        });
    }, [])

  return (
    <div>

    </div>
  )
}
