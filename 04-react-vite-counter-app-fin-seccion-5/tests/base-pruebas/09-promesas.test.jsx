import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Pruebas en 09-promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => { //done es propio de jest para saber si ya se termino el codigo
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
            
                expect(hero).toEqual({ //dentro del then porque es una promesa
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            });
        
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync( id )
           .then( hero => {
               expect( hero ).toBeFalsy();
               done();
           })
           .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
            });
        
    });


});