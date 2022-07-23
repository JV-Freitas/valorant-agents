import React from 'react';
import characters from '../data/characters';
import '../styles/Characters.scss';

export default function Characters() {
  function getAgents() {
    return characters.map((character) => {
      return (
        <div
          className={character.isRadiant ? 'cardRadiant' : 'cardnotRadiant'}
          key={character.id}
        >
          <h3>{character.name}</h3>
          <img src={character.avatar} alt={character.name} />
          <div className="content">
            <p>Função: {character.role}</p>
            <p>Skills: {character.skills.join(' - ')}</p>
          </div>
        </div>
      );
    });
  }

  return <div>{getAgents()}</div>;
}
