// ## ril : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe("QA testing", () => {
  // it("first test", () => {
  //   cy.visit("https://www.ministryoftesting.com/articles/75-testing-practice-websites-to-master-software-qa-in-2024")

  //   cy.contains('Testing Practice')
  //   cy.get('#eventNav')
  //   cy.get('#eventNav').click()
  //   cy.url().should("include", "/events")
  // })
  it("first test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('.orangehrm-login-branding')

  })
})