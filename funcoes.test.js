const funcoes = require('./funcoes');

test('Dois mais dois devera ser quatro', () => {
    expect( funcoes.somarDoisValores(2,2)).toBe(4);
});

test('Deve ser null', () => {
    expect( funcoes.sempreNulo()).toBeNull();
});

test('100 deve ser permitido', () => {
    expect( funcoes.codigoValido(100)).toBeTruthy();
});

test('-1 não deve ser permitido', () => {
    expect( funcoes.codigoValido(-1)).toBeFalsy();
});

test('Deve inverter String Java -> avaJ', () => {
    expect( funcoes.inverterString('Java')).toEqual('avaJ');
})