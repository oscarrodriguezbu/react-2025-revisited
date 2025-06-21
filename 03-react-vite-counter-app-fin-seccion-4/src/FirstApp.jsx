import PropTypes from 'prop-types'; //puede que en vite toque instalarlo e importarlo

export const FirstApp = ({ title, subTitle, name }) => { //vienen de props desestructurado

  // console.log(props);
  
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

//! ESTO SIEMPRE SE COLOCA ABAJO DE ESTA MANERA:

//Basicamente es un tipado similar a typeScript:
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

//Valores por defecto:
FirstApp.defaultProps = {
  name: 'Oscar Rodriguez',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título', // se puede mandar otra propiedad sin haberla declarado con propTypes
}
