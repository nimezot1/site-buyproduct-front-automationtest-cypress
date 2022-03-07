const element = require('./elements').ELEMENTS
const cred = require('../../data/creds').ENTREGADOR

class Register {
    preencherCampos(){
        cy.get(element.nome).type(cred.nome)
        cy.get(element.cpf).type(cred.cpf)
        cy.get(element.email).type(cred.email)
        cy.get(element.whatsapp).type(cred.whatsapp)
        cy.get(element.postalcode).type(cred.endereco.cep)
    }

    validarCEP(){
        cy.get(element.buttonCep).click
    }

 
    validaSize(elemento, nomeMedida, tamanho){
        if (elemento == 'img') {
            cy.get(element.img).invoke(nomeMedida).should('be.eql', tamanho);
        }else if (elemento == 'btn') { 
            cy.get(element.btn).invoke(nomeMedida).should('be.eql', tamanho);
        }
    }

    validaCSS(elemento, css, tamanho){
        if (elemento == 'TextDelivery') {
            cy.get(element.TextDelivery).should('have.css', css, tamanho);
        }else if (elemento == 'btnEnviar') {
            cy.get(element.btnEnviar).should('have.css', css, tamanho);
        }else if (elemento == 'input') {
            cy.get(element.input).should('have.css', css, tamanho);
        }

    }

    validaMarginTop(){
        cy.get('button[type=submit]').should('have.css', 'margin-top', '40px');
    }
    
    validaPadding(){
        cy.get('input[name=name][placeholder="Nome completo"]').should('have.css', 'padding', '16px 24px');
    }

}

export default new Register();