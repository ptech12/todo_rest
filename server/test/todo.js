let chai = require('chai');
let chaiHttp = require('chai-http')

let server = require('../index');

// assertion Style 
chai.should();
chai.use(chaiHttp);

describe("Todo API", () => {
    /**
     * Test GET /todos route
     */
    describe('GET /todos', () => { 
        it("It should get all the todos", done => {
            chai.request(server)
                .get("/todos")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    // res.body.length.should.be.equal(3)
                    done();
                });
        });
        
        it("It should return NOT FOUND on wrong URI", done => {
            chai.request(server)
                .get("/todo")
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });

     });



    /**
     * Test GET /todos/:id route
     */

    /**
     * Test POST /todos route
     */

    /**
     * Test PUT /todos route
     */

    /**
     * Test DELETE /todos route
     */
})