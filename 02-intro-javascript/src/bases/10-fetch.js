
const apiKey = 'XUWg9f7WklTnBFdi4gckyiMtdWCUc6XB'; //entrar y crear cuenta en https://developers.giphy.com

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )//cuando termine pasa al siguiente then
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn ); //atrapa el error de cualquer parte, pero tambien se puede hacer de forma individual por cada then
