describe('Wishlist spec', () => {
    let productId = 4;

    before(() => {
        cy.request({
            method: "POST",
            url: "https://bookcart.azurewebsites.net/api/login",
            body: {
                "username": "valkyrie",
                "password": "Negan124356094",
            },
        }).then((response) => {
            let token = response.body.token;
            let userId = response.body.userDetails.userId;
            cy.log(userId)
            Cypress.env('userId', userId);
            cy.log(Cypress.env('userId'))
            Cypress.env('token', token);
            cy.log(response.status);
        });
    });

    it('Post Wishlist item', () => {
        cy.api({
            method: "POST",
            url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${Cypress.env('userId')}/${productId}`,
            headers: {
                'accept': 'text/plain',
                'Authorization': 'Bearer ' + Cypress.env('token'),
            },
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(200);
        });
    }),

        it('Get Wishlist items', () => {
            cy.api({
                method: "GET",
                url: `https://bookcart.azurewebsites.net/api/Wishlist/${Cypress.env('userId')}`,
            }).then((response) => {
                expect(response.status).to.equal(200);
            });
        }),

        it('Delete Wishlist item', () => {
            cy.api({
                method: "DELETE",
                url: `https://bookcart.azurewebsites.net/api/Wishlist/${Cypress.env('userId')}`,
                headers: {
                    'accept': 'text/plain',
                    'Authorization': 'Bearer ' + Cypress.env('token'),
                },
            }).then((response) => {
                cy.log(response.body)
                expect(response.status).to.eq(200);
            });
        })
    
})