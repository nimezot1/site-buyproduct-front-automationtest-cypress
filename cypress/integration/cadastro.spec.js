import Home from '../support/pages/home'
import Register from '../support/pages/register'

describe('Cadastro', () => {
    it('Preencher campos', () => {
        Home.sizePage();
        Home.accessPage();
        Home.clickButton();
        Home.checkpointPage();

        Register.preencherCampos();
        Register.validarCEP();
    })

    it('Tamanho Imagem - width, height', () => {
        Register.validaSize('img', 'width', 200);
        Register.validaSize('img', 'height', 50);
   })

    it('Tamanho Texto - font-size', () => {
        Register.validaCSS('TextDelivery', 'font-size', '36px');
   })

    it('Tamanho Botão - width, height', () => {
        Register.validaSize('btn', 'width', 260);
        Register.validaSize('btn', 'height', 56);
   })

    it('Posição Botão - margin-top', () => {
        Register.validaCSS('btnEnviar', 'margin-top', '40px');
   })

    it('Tamanho Input - padding', () => {
        Register.validaCSS('input', 'padding', '16px 24px');
  })
})