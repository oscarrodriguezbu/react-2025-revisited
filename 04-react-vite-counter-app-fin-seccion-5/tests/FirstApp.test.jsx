import { render } from '@testing-library/react';//instalarlo e importarlo en vite
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {
    
    //!En desarrollo no hacer pruebas del snapshot porque siempre va a cambiar y puede ser un dolor de cabeza
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola, Soy Goku';
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();
    //! se ha creado una carpeta de snapshoot automaticamente con toMatchSnapshot, 
    // muy util para saber si hubo cambios en el componente, por ejemplo si se agrego o eliminó un titulo etc.

    // });

    test('debe de mostrar el título en un h1', () => {
        
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        //! Al renderizar, retorna props, metodos, etc. para muchas cosas para probar
        expect( getByText(title) ).toBeTruthy();

        //!No se recomienda pero por si acaso:
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )

        //La manera recomendada sin buscar un h1 en concreto pero si el id:
        expect( getByTestId('test-title').innerHTML ).toContain(title)

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2); //getAllByText espera mas de un elemento, pero regresa un array de html

    });


});