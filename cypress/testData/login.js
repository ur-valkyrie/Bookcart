/// <reference types="Cypress" />
import { signUp } from "./signUp";

let userID;
let token;
// export function login() {
//     return signUp().then(({ username, password }) => {
//         cy.request({
//             method: "POST",
//             url: "https://bookcart.azurewebsites.net/api/login",
//             body: {
//                 username: username,
//                 password: password,
//             },
//         }).then((response) => {
//             userID = response.body.userDetails.userId;
//             token = response.body.token;
//             cy.log(response);
//             cy.log(response.body.token);
//             cy.log(response.body.userDetails.userId);
//             cy.log(response.status);
//         });
//     });
// }

// export { userID }


export function login() {
    return signUp().then(({ username, password }) => {
      return cy.request({
        method: "POST",
        url: "https://bookcart.azurewebsites.net/api/login",
        body: {
          username: username,
          password: password,
        },
      }).then((response) => {
        userID = response.body.userDetails.userId;
        token = response.body.token;
        cy.log(response);
        cy.log(response.body.token);
        cy.log(response.body.userDetails.userId);
        cy.log(response.status);
    });
    });
  }

  export { userID }