import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0});

    useEffect(() => {
        
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove ); //se envia el evento a onMouseMove, esta es la forma simplificada
        
      return () => {// se quita la suscripcion de mousemove cuando el componente se elimina
        window.removeEventListener( 'mousemove', onMouseMove ); //se envia el evento a onMouseMove, esta es la forma simplificada
      }
    }, []);
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
