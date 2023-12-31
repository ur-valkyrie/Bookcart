/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

export function signUp() {
    const username = faker.internet.userName();
    const password = faker.internet.password();
  
    return cy.request({
        method: "POST",
        url: "https://bookcart.azurewebsites.net/api/User",
        body: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            username: username,
            password: password,
            confirmPassword: faker.internet.password(),
            gender: faker.person.sexType(),
        },
    }).then(() => {
        return { username, password };
    });
  }