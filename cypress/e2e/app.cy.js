/* global cy */
describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:4000')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})