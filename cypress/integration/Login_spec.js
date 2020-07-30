

describe('login',function () {
    it('login success',function () {
        cy.visit('/');
        cy.url().should('eq','http://localhost:8080/');
        cy.get('#username').type('student0').should('have.value','student0');
        cy.get('#__BVID__8').type('123456').should('have.value','123456');
        cy.get('.btn').click()
        cy.url().should('eq','http://localhost:8080/student/home')
    });

    it('login fail',function () {
        cy.visit('/');
        cy.url().should('eq','http://localhost:8080/');
        cy.get('#username').type('40474829').should('have.value','40474829');
        cy.get('#__BVID__8').type('maomao8816229').should('have.value','maomao8816229');
        cy.get('.btn').click();
        cy.url().should('eq','http://localhost:8080/')
    })
});
