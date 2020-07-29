describe('courseAll',function () {
    beforeEach(()=>{
        cy.visit('/')
        cy.get('#username').type('student0')
        cy.get('#__BVID__8').type('123456')
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .el-submenu__title').click()
        cy.get('[style="position: fixed; top: 70px; left: 312px; z-index: 2002;"] > .el-menu > :nth-child(1)').click()
    })

    it('check all the button',function () {
        //翻页
        cy.get('.el-table__expand-icon').click({multiple:true,force:true})
        cy.get('.number').click({multiple:true,force:true})
        //进行页码输入跳转
        cy.get('.el-pagination__jump > .el-input > .el-input__inner').clear().type(20)
        cy.get('.el-pagination__jump > .el-input > .el-input__inner').should('have.value',20)
        cy.get('.handle').click()
        cy.get('.active').should('have.text',20)
        //进行模糊查询
        cy.get('.searchName > .el-input__inner').clear({force:true}).type('力学').should('have.value','力学');
        cy.get('.el-button--primary').click();
        cy.get(':nth-child(n+1) > .el-table_1_column_3 > .cell').should('contain','力学')
        }
        )

    it('check select courses',function () {
        cy.get('.el-table__expand-icon').click({multiple:true,force:true})
        cy.contains('选课',{multiple:true}).click({multiple:true})
    })
})
