import * as React from 'react';
import { PiletApi } from 'app-shell';
import Tile from './Tile';
import './main.css'

export function setup(app: PiletApi) {

  const updateGreeting = (greeting: string) => {
    window.localStorage.setItem('greeting', greeting);
  };
  
  app.showNotification(() => {
    const greeting = window.localStorage.getItem('greeting') || 'Hello World!';
    return (
    <>
      {greeting}
    </>
    )
  }, {
    autoClose: 10000,
    type: 'info'
  });
  app.registerTile(() => {
    return (
    <>
      <Tile updateGreeting={updateGreeting} />
    </>
    )
  }, {
    initialColumns: 3,
    initialRows: 1,
  });

}
