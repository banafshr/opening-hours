describe('Opening hours', () => {
  beforeEach(() => {
    cy.visit('localhost:3000').wait(300)
  })
  const weekdays = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
  it('Should show correct weekdays', function () {
    cy.get("[data-testid=main-wrapper]")
    .contains("TODAY")
    .get("[data-testid=table]>div>div.center>p").should('have.length', 7)
    .each((value, i) => {
      expect(value.text()).to.equal(weekdays[i])
    })
  })
})