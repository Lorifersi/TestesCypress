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
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Subtitulo h3 correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo2').contains('Conta e cartão gratuitos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Parágrafo escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Subtitulo h3 correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo3').contains('Saques sem custo')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Parágrafo correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Novo subtitulo h3 correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo4').contains('Programa de pontos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Parágrafo novo correto!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Subtitulo h3 escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('sub-titulo5').contains('Seguro Dispositivos')
  })
})

describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Parágrafo escrito corretamente!', () => {
    cy.visit('http://localhost:3000')
    cy.getByData('paragrafo4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
})
