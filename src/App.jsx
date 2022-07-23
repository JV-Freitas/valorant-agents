import React from 'react';

import Title from './components/Title';

import './App.scss';
import Characters from './components/Characters';
import Maps from './components/Maps';

export default function App(Props) {
  return (
    <>
      <Title title="Valorant Agents!" subtitle="my subtitle" />
      <Characters />
      <Maps />
    </>
  );
}
