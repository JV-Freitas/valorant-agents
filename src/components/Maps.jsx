import React from 'react';
import maps from '../data/maps';
import '../styles/Maps.scss';

export default function Maps() {
  function getMaps() {
    return maps.map((map) => {
      return (
        <div key={map} className="card">
          <h2>{map}</h2>
        </div>
      );
    });
  }
  return <div>{getMaps()}</div>;
}
