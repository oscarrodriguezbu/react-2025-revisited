import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

//Pruebas optimizadas de FirstApp:
describe('Pruebas en <FirstApp />', () => {

    const title    = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';
    
    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy(); 
        //el screen tiene todas las propiedades, metodos etc del componente renderizado. Se actualiza con todo lo que se le haga en la prueba en cuestion
        
        // screen.debug(); //muestra el estado del render en consola
    });

    test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );// toContain campara con espacios, el toBe no
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />  
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });


});