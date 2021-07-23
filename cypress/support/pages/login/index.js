const el = require('./elements').ELEMENTS

class Login{
 
    acessarLogin(){
        cy.visit('login');
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type(Cypress.config().user.password)
    }
   
    submeterFormulario(){
        cy.get(el.buttonSubmit).click()
    }
    validarLogin(){

        cy.wait(`@${Routes.as.POSTLogin}`).then((postLoginRes) => {
            expect(postLoginRes.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETTags}`).then((getTagsRes) => {
            expect(getTagsRes.response.statusCode).to.eq(200)
        })
        cy.wait(`@${Routes.as.GETArticles}`).then((getArticlesRes) => {
            expect(getArticlesRes.response.statusCode).to.eq(200)
        })

        cy.get(el.linkEditor).should('be.visible')
     }        

}

export default new Login()