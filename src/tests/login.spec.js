const { doLogin } = require('./../login');

describe('testando /src/login.js',() => {
        
    //teste 1
        test('Teste 1 - Testando acesso válido', () => {
            const resultado = doLogin('teste@teste.com', '123456');
            expect(resultado).toBeTruthy();
        })
        //Teste 2
        test('Teste 2 - Testando acesso inválido', () => {
            const resultado = doLogin('carlos@teste.com', '123456');
            expect(resultado).toBeFalsy();
        });
    })
    