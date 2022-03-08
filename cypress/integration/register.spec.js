import Home from '../support/pages/home'
import Register from '../support/pages/register'

describe('Register new user', () => {
    it('Filling in fields', () => {
        Home.sizePage();
        Home.accessPage();
        Home.clickButton();
        Home.checkpointPage();

        Register.preencherCampos();
        Register.validarCEP();
    })

    it('Validates image size - width, height', () => {
        Register.validaSize('img', 'width', 200);
        Register.validaSize('img', 'height', 50);
   })

    it('Validates text size - font-size', () => {
        Register.validaCSS('TextDelivery', 'font-size', '36px');
   })

    it('Validate button size - width, height', () => {
        Register.validaSize('btn', 'width', 260);
        Register.validaSize('btn', 'height', 56);
   })

    it('Validate button position - margin-top', () => {
        Register.validaCSS('btnEnviar', 'margin-top', '40px');
   })

    it('Validates input size - padding', () => {
        Register.validaCSS('input', 'padding', '16px 24px');
  })
})