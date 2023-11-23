/// <reference types="Cypress" />
import { login } from "./login";
import { userID } from "./login";

export function getUser() {
  return login().then(() => {
    cy.request({
      method: "GET",
      url: `https://bookcart.azurewebsites.net/api/User/${userID}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
}