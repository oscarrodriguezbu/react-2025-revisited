import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';


describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un número', () => {
        
        const [ letters, numbers ] = retornaArreglo();
        
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect(typeof letters).toBe('string') //jest ya tiene codigo para comparar tipo de dato
        expect(typeof numbers).toBe('number') //jest ya tiene codigo para comparar tipo de dato

        expect( letters ).toEqual( expect.any(String) );// esto acepta cualquier tipo de string

    });


});