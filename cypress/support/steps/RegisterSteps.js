import Home from '../pages/home'
import Register from '../pages/register'

Given("access the buger-eats website", () => {
        Home.sizePage();
        Home.accessPage();
})

When("fill in the registration fields", () => {
        Home.clickButton();
        Home.checkpointPage();

        Register.preencherCampos();
        Register.validarCEP();
})

Then("check the size and position of the elements", () => {
    Register.validaSize('img', 'width', 200);
    Register.validaSize('img', 'height', 50);
    Register.validaCSS('TextDelivery', 'font-size', '36px');
    Register.validaSize('btn', 'width', 260);
    Register.validaSize('btn', 'height', 56);
    Register.validaCSS('btnEnviar', 'margin-top', '40px');
    Register.validaCSS('input', 'padding', '16px 24px');
})





