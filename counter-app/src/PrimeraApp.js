import { Fragment } from "react";

import PropTypes from "prop-types";

//functional components
const PrimeraApp = ( props) => {

    const saludo = 'Hola muncdo const'; // los booleanos no imprime en el html

    console.log('props', props);

    const saludos = {
        nombre: 'CEAD',
        edad: 45
    }

    return (

        //Fragment  de  forma corta <>
        <>
            <h1>{saludo + props.saludo}</h1>
            <pre>{ JSON.stringify(saludos, null, 3) }</pre>
            <p>Mi primera aplicación {props.otra}</p>
            <p>props.subtitulo</p>

        </>
            
        );
}


PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number.isRequired

}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo default",
    saludo:"Saludo defecto",
    otra:1

} 


export default PrimeraApp;