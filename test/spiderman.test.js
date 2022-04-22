const Spiderman = require("../app/spiderman") 

describe("Unit Test for Spiderman class", () =>{
    
    test('1) Create an spiderman object', () => {
        //instanciamos un objeto Spiderman
        const andrewGarfield = new Spiderman ("The Amazing Spiderman", 31, "Andrew Garfield", 3, "Sony");

        //Validamos que este codigo funcione de la forma esperada
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.edad).toBe(31)
        expect(andrewGarfield.estudio).toBe("Sony")
        expect(andrewGarfield.nombre).toBe("The Amazing Spiderman")
        expect(andrewGarfield.numPeliculas).toBe(3)
    });

    test('2) Use the Method getInfo()', () => {
        const tomHolland = new Spiderman("Spiderman UCM", 25, "Tom Holland", 6, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    })
});