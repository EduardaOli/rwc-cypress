/// <reference types = "cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicações', () => {
    
    beforeEach(() => {
        Routes.init()
        cy.backgroundLogin()            
        articles.acessarFormularioDeNovaPublicacao()

    });
    it('Criar uma nova publicação', () => { 
        articles.preemcherFormulario()
        articles.submeterPucblicacao()
        articles.verificarSeAPublicacaoFoiCriadaComSucesso()

        
    });

});