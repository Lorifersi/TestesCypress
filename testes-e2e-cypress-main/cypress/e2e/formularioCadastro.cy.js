describe('Formulário cadastro', () => {
    beforeEach(()=> {
    cy.visit('http://localhost:3000')
    })
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click() /* testaremos agora o botão 'cadastrar' */
    cy.getByData('nome-input').type('Jose da Silva')
    cy.getByData('email-input').type('3@email.com')
    cy.getByData('senha-input').type('456789')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')

    })

    it('Não deve permiter o campo nome em branco', ()=> {
        cy.visit('/')
        cy.getByData('botao-cadastro').click()
        //cy.getByData('nome-input').type('Jose da Silva')
        cy.getByData('email-input').type('neilton@alura.com') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório') /* a
    
    // mensagem exibida deve ser: "o campo nome é obrigatório" */
    })

    it('Não deve permitir um e-mail inválido!', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('neilton@alura')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
    })

    it('Não deve permiter o campo email em branco', ()=> {
        cy.visit('/')
        cy.getByData('botao-cadastro').click()
        //cy.getByData('nome-input').type('Jose da Silva')
        //cy.getByData('email-input').type('') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório') /* a
    
    // mensagem exibida deve ser: "o campo email é obrigatório" */
    })

    it('Não deve permiter o campo senha em branco', ()=> {
        cy.visit('/')
        cy.getByData('botao-cadastro').click()
        //cy.getByData('nome-input').type('Jose da Silva')
        cy.getByData('email-input').type('neilton@alura.com') /* não passaremos nenhuma informação no campo email, comentando esta linha, pois o comando type não aceita parâmetro vazio */
        //cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório') /* a
    
    // mensagem exibida deve ser: "o campo email é obrigatório" */
    })

    })