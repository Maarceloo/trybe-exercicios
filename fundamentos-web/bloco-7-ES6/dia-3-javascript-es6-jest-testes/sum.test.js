const { TestWatcher } = require("jest");
const sum = require(`./sum`);

describe('testes do exercicio 01', () => {
    test(`Verifica se resposta de sum(1,2) é igual a 3`, () => {
      expect(sum(1, 2)).toBe(3);
    });
    
    test(`Verifica se resposta de sum(0,0) é igual a 0`, () => {
      expect(sum(0, 0)).toBe(0);
    });
    
    test(`verifica se resposta de sum(4, "5") retorna erro`, () => {
      expect(() => {sum(0, "5")}).toThrow("parameters must be numbers");
    });
})
