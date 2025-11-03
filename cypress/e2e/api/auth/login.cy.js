describe('POST /login - authenticate with a newly created user (200)', () => {
    it('should successfully create and authenticate a user', () => {
      const random = Math.floor(Math.random() * 100000);
      const email = `testqa${random}@qa.com`;
  
      const user = {
        nome: 'test',
        email,
        password: 'test',
        administrador: 'true',
      };
  
      // Create the user
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        failOnStatusCode: false,
      }).then((createRes) => {
        expect(createRes.status).to.eq(201);
        expect(createRes.body.message).to.eq('Cadastro realizado com sucesso');
  
        cy.log(`🔐 Logging in with: ${user.email} | Password: ${user.password}`);
  
        // Log in with the same user
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/login',
          body: {
            email: user.email,
            password: user.password,
          },
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          failOnStatusCode: false,
        }).then((loginRes) => {
          expect(loginRes.status).to.eq(200);
          expect(loginRes.body).to.have.property('authorization');
          cy.log('✅ Token received:', loginRes.body.authorization);
        });
      });
    });
  });
  