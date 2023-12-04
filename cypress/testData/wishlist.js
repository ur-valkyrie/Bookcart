/// <reference types="Cypress" />
import { login } from "./login";
import { userID } from "./login";
import { token } from "./login";

export function getWishlist() {
  return login().then(() => {
    cy.request({
      method: "GET",
      url: `https://bookcart.azurewebsites.net/api/Wishlist/${userID}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
}

export function deleteWishlist() {
  return login().then(() => {
    cy.request({
      method: "DELETE",
      url: `https://bookcart.azurewebsites.net/api/Wishlist/${userID}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
}

export function addWishlist() {
  return login().then(() => {
    cy.request({
      method: "POST",
      url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userID}/31`,
      body: {
        "bookId": 31,
        "title": "Robbie",
        "author": "Ella Frank",
        "category": "Fiction",
        "price": 345.00,
        "coverFileName": "2141f7a1-e6b8-4d88-91e3-0d3a141117be39086215.jpg"
      },
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
}
