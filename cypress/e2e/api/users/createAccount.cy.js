describe('POST /usuarios - Create new user Account (201)', () => {
  it('must create new user successfully', () => {
    const random = Math.floor(Math.random() * 100000);
    const email = `testeqa${random}@qa.com`;

    const newUser = {
      nome: 'teste',
      email,
      password: 'teste',
      administrador: 'true',
    };

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: newUser,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
      cy.log('Usuário criado:', JSON.stringify(response.body));
      cy.log('📧 Email:', email);
      cy.log('🔐 Senha:', newUser.password);
    });
  });
});