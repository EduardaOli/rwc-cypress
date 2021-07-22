/// <reference types = "cypress"/>

import Routes from '../../routes'

const faker = require('faker')

const el = require('./elements').ELEMENTS

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(el.linkNovaPublicacao).click()
    }

    preemcherFormulario() {
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }

    submeterPucblicacao() {

        cy.get(el.buttonSubmit).click();  
    }
    verificarSeAPublicacaoFoiCriadaComSucesso(){

        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.status).to.eq(200)
        })
    }

}

export default new Articles();