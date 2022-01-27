
describe('Cadastro', () => {
    it('Usuario deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Tiago Ferreira',
            cpf: '26951294836',
            email: 'teste@teste.com.br',
            whatsapp: '11940404040',
            endereco: {
                cep: '13471750',
                rua: 'Rua Monaco',
                numero: '76',
                complemento: '',
                bairro: 'Vila Santa Maria',
                cidade_uf: 'Americana/SP'

            }
        }

        cy.get('input[name=name][placeholder="Nome completo"]').type(entregador.nome)
        cy.get('input[name=cpf][placeholder="CPF somente números"]').type(entregador.cpf)
        cy.get('input[name=email][placeholder="E-mail"]').type(entregador.email)
        cy.get('input[name=whatsapp ][placeholder="Whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click

    })
})