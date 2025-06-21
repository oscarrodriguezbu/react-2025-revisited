import { useEffect, useState } from 'react';


const localCache = {};//para almacenar peticiones y no volverlas a ejecutar si ya la tenemos guardada
//como esta fuera del scope, solo el hook puede acceder a esta constante


export const useFetch = ( url ) => {
  
  const [state, setState] = useState({
    data: null ,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();

  }, [url]);

  const setLoadingState = () => {//resetea el estado para cargar data nueva si la hay
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }


  const getFetch = async() => {

    if ( localCache[url] ) {
      console.log('Usando caché');
      setState({
        data: localCache[url],//devuelve info de la url actual
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }



    setLoadingState();

    const resp = await fetch(url);

    // sleep
    await new Promise( resolve => setTimeout(resolve, 1500) );//es para poder ver el loading con mas calma

    if ( !resp.ok ) {
      setState({
        data:null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        }
      });
      return;
    }
  
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    // Manejo del caché
    localCache[url] = data;//almacenar en caché

  }
  
  


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }

}