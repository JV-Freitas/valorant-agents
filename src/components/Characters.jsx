import React from 'react';
import characters from '../data/characters';
import '../styles/Characters.scss';

export default function Characters() {
  function getAgents() {
    return characters.map((character) => {
      return (
        <div
          className={
            character.isRadiant ? 'card cardRadiant' : 'card cardnotRadiant'
          }
          key={character.id}
        >
          <h3>{character.name}</h3>
          <img src={character.avatar} alt={character.name} />
          <div className="content">
            <h3>Função:</h3>
            <p>{character.role}</p>
            <h3>Biografia:</h3>
            <p className="bio">{character.bio}</p>
            <h3>Skills:</h3>
            <p>{character.skills.join(' - ')}</p>
          </div>
        </div>
      );
    });
  }

  return <div>{getAgents()}</div>;
}
