/*

JSX = JAVASCRIPT MAS XML

*/
//console.log('hOLA mUNDO');

import React from 'react';
import {createRoot} from "react-dom/client"; 
import PrimeraApp from './PrimeraApp';
import './index.css';
import { CounterApp } from './CounterApp';

const saludo = <h1>Hola mundo</h1>
//console.log('saludo', saludo);

const root = createRoot(document.querySelector('#root'));

//ReactDOM.render(saludo,divRoot);
//root.render(<PrimeraApp saludo="Hola Kakaroto" />);
root.render(<CounterApp value={10} />);
