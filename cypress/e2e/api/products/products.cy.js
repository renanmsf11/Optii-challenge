describe('GET /produtos - list products (200)', () => {
    it('should return a list of products', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
  
        const responseBody = response.body;
        const products = responseBody.produtos;
  
        cy.log('📦 Products found:');
        if (Array.isArray(products)) {
          products.forEach((product, index) => {
            cy.log(`\n🛒 Product ${index + 1}`);
            cy.log(`ID: ${product._id}`);
            cy.log(`Name: ${product.nome}`);
            cy.log(`Price: ${product.preco}`);
            cy.log(`Description: ${product.descricao}`);
            cy.log(`Quantity: ${product.quantidade}`);
          });
        } else {
          cy.log('⚠️ No products found or unexpected response structure:', JSON.stringify(products));
        }
      });
    });
  });
  