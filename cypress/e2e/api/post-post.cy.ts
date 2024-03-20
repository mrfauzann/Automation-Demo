/// <reference types = "cypress"/>

describe('POST request for Post', () => {
   
    it('POST Request for Post', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                "title": "Testing Project",
                "body": "For testing purpose",
                "userId": 1
            }
        }).then(function(resp){
                expect(resp.body).to.have.all
                    .keys(
                        "id",
                        "title",
                        "body",
                        "userId"
                        )
                cy.log(resp.body.id)
                cy.log(resp.body.title)
                cy.log(resp.body.body)
                cy.log(resp.body.userId)
        })
    })
})