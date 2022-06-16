import React, { useState } from 'react';
import PropTypes from "prop-types";


export const CounterApp = ({value}) => {
    console.log('render');

    const [ counter, setCounter  ] = useState(value);

    const  handleAdd= (event, newValue) =>{
        //console.log('event', event);
       // setCounter(counter+1);
        console.log('newValue', newValue);

        setCounter( (c) => c +1  );

    }

    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);


  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ (event) => { handleAdd(event)}} >
            +1
        </button>
        <button onClick={ (event) => { handleSubstract(event)}} >
            -1
        </button>
        <button onClick={ (event) => { handleReset(event)}} >
            Reset
        </button>
    </>
  )
}



CounterApp.propTypes = {
    value: PropTypes.number
}