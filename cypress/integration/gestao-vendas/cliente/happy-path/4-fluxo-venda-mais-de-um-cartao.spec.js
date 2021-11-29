describe('Fluxo de venda - Mais de um cartão', function() {
    const TEMPO = 2000;
    it('adiciona um item ao carrinho de compras', function() {
        cy.visit('http://localhost:4200/livraria/carrinho')
        cy.wait(TEMPO)
     
        cy.get('#btnConsultarEstoque').click()
        cy.wait(TEMPO)
     
        cy.get('.estoque-container > .mat-card:nth-child(3) > .estoque-container-card-button > #livroCard > .mat-button-wrapper').click()
        cy.wait(TEMPO)
 
        cy.get('#addCarrinho').click()
        cy.wait(TEMPO)
     
        if (!sessionStorage.getItem("isLogado")) {
           cy.visit("http://localhost:4200/livraria/login");
           cy.wait(TEMPO)
 
           cy.get(".painel_login-container").within(() => {
             cy.get("#inputEmail").type("gluz@gmail.com");
             cy.wait(TEMPO)
 
             cy.get("#inputSenha").type("abc12345");
             cy.wait(TEMPO)
          });
    
          cy.get(".painel_login-container-form > button").click();
          cy.wait(TEMPO)
        }
        
        cy.visit('http://localhost:4200/livraria/carrinho')
        cy.wait(TEMPO)
     }),

     it('adicionar endereco anexado ao perfil', ()=> {
        cy.get('#cbEnderecoPerfil').click()
        cy.get('#slcEnderecoPerfil').click()
        cy.get('.enderecoPerfilOption').eq(0).click()
     }),
   
     it('adicionar 2 cartões do perfil', ()=> {
        cy.get('#myCardSelector').click()
        cy.wait(TEMPO)
        cy.get('.cardOption').eq(0).click()
        cy.wait(TEMPO)
        cy.get('#txtValorPago').clear().type(80)
        cy.wait(TEMPO)

        cy.get('#btnMaisCartao').click()

        cy.get('.seletorBandeira').eq(1).click()
        cy.get('.cardOption').click()
        cy.wait(TEMPO)
        cy.get('.inputValorPago').eq(1).clear().type(300)
        cy.wait(TEMPO)
     }),

     it('finalizar pedido', ()=> {
        cy.get('#btnFinalizar').click()
     })
})
   