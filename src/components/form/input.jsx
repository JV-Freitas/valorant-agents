import React, { useState } from 'react';

export default function Input(Props) {
  const [name, setName] = useState('j0tta');

  return (
    <>
      <h3>{name}</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </>
  );
}
