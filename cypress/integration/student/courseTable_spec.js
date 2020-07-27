describe('courseTable',function () {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#username').type('student66')
        cy.get('#__BVID__8').type('123456')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .el-submenu__title').click()
        cy.get('[style="position: fixed; top: 70px; left: 442px; z-index: 2002;"] > .el-menu > :nth-child(1)').click()
    })

    it('get details and drop courses',function () {
        cy.get(':nth-child(2) > .flex-item > .small-text').click({force:true}).get('.el-dialog__title').should('contain', '课程').get(':nth-child(2) > span').click()
    })
})
