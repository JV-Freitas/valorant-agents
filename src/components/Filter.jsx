import React, { useState } from 'react';
import characters from '../data/characters';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const lowFilter = filter.toLowerCase();
  const charactersFiltrado = characters.filter((agentFiltred) => {
    agentFiltred.contains(lowFilter);
  });

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <ul>
        {charactersFiltrado.map((char) => {
          <li key={char}>{char}</li>;
        })}
      </ul>
    </>
  );
}
