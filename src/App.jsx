import React from 'react';

import Title from './components/Title';

import './App.scss';
import Characters from './components/Characters';

export default function App(Props) {
  return (
    <>
      <Title title="Valorant Agents" />
      <Characters />
    </>
  );
}
