describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('toggle the main page', () => {
    cy.get('.header > .save').click()
  })
  it('checks if the input is correct', () => {
    cy.get('input').type('test')
  })
  it('checks if the input on the text area is correct', () => {
    cy.get('textarea').type('im in the text area')
  })
  it('checks if the button is clickable', () => {
    cy.get('textarea').click()
  })
})
  