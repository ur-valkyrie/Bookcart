import { login } from "../testData/login"

describe('login via API', () => {
  it('login', () => {
    login();
    cy.visit('https://bookcart.azurewebsites.net'), {
      onBeforeLoad(content) {
        content.window.localStorage('authToken', token);
      }
    }
  })
})