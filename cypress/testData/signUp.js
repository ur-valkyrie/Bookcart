/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

export function signUp() {
    return new Promise((resolve) => {
        const username = faker.internet.userName();
        const password = faker.internet.password();

        cy.request({
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
        }).then((response) => {
            cy.log(response);
            resolve({ username, password });
        });
    });
}