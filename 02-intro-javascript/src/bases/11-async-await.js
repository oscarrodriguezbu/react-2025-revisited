

//sin asyn y await:
// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

//con asyn y await:
const getImagen = async() => { //async transforma en promesa la funcion
    //await hace que la promesa trabaje de forma sincrona, espera que la promesa termine para continuar

    try {

        const apiKey = 'XUWg9f7WklTnBFdi4gckyiMtdWCUc6XB';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();



