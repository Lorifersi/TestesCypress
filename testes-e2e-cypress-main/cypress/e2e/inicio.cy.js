describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Texto h2 está correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo').contains('Vantagens do nosso banco:')
  })
  it('Subtitulo h3 correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo2').contains('Conta e cartão gratuitos')
  })
  it('Parágrafo escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
  it('Subtitulo h3 correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo3').contains('Saques sem custo')
  })
  it('Parágrafo correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
  it('Novo subtitulo h3 correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo4').contains('Programa de pontos')
  })
  it('Parágrafo novo correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
  it('Subtitulo h3 escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo5').contains('Seguro Dispositivos')
  })
  it('Parágrafo escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.Identificar('paragrafo4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Imagem encontrada!', () => {
    cy.getByData('imagem').should("be.visible")
  })
})

describe('Página Principal 2', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Parágrafo escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.Identificar('paragrafo4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})

