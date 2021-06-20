// ------------------ teste com jasmine ------------------ / /
var valor1 = 25;
var valor2 = 31;
var soma = valor1 + valor2;

describe("Pegar valores", () => {

    it("Valor um", () => {
        expect(valor1).toBe(25)
    });


    it("Valor dois", () => {
        expect(valor2).toBe(31)
    });

    it("Soma de valores", () => {
        expect(soma).toBe(56)
    });
});