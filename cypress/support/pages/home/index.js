const element = require('./elements').ELEMENTS

class Home {
    sizePage(){
        cy.viewport(1440, 900);
    }

    accessPage(){
        cy.visit(element.page);
    }

    clickButton(){
        cy.get(element.buttonRegister).click()
    }

    checkpointPage(){
        cy.get(element.checkpointPage).should('have.text', 'Cadastre-se para  fazer entregas')
    }
}

export default new Home();