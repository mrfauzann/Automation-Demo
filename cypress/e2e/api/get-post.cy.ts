/// <reference types = "cypress"/>

describe('GET Request for Post', () => {
    it('Get All Post', () => {
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts',
        }).then(function(response){
            expect(response.body[0]).have.property('userId')
            cy.log(response.body[0])
        })
    })

    it('Assert HTTP Status for Post', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
        }).its('status').should('eql',200)
    })

    it('Validate Total Data', () => {
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts',
        }).then(function(response){
            expect(response.body).to.be.an('array').that.is.not.empty

            var arrayLength = response.body.length
            cy.log('Total Data is ', arrayLength)
            expect(response.body.length).to.be.equal(arrayLength)

            for (let i=0;i<arrayLength;i++){
                expect(response.body[i]).to.have.all.keys('userId','id','title','body')
            }
        })
    })

    it('Validate Data', () => {
        cy.request({
            method : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts/1',
        }).then(function(response){
            expect(response.body).that.is.not.empty
            expect(response.body).to.have.all.keys('userId','id','title','body')
            const a = JSON.parse(response.body.id)
            expect(a).to.equal(1)
        })
    })
})