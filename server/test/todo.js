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

    describe('GET /todos/:id', () => { 
        it("It should GET todos by ID", done => {
            // change an ID after insert some data
            const todo_id = 16
            chai.request(server)
                .get(`/todos/${todo_id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object')
                    res.body.should.have.property('todo_id')
                    res.body.should.have.property('description');
                    res.body.should.have.property('todo_id').eq(todo_id);
                    done();
                });
        });

        it("It should NOT GET todos by ID", done => {
            // change an ID after insert some data
            const todo_id = 103;
            chai.request(server)
                .get(`/todos/${todo_id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.text.should.be.eq("The task with the provided ID does not exists")
                    done();
                });
        });
    });
    /**
     * Test POST /todos route
     */
    // describe('POST /todos', () => { 
    //     it("It should create a new todo", done => {

    //         /* Change if needed */
    //         const todo = {
    //             description: "insert from testing"
    //         } 
    //         chai.request(server)
    //             .post("/todos")
    //             .send(todo)
    //             .end((err, res) => {
    //                 res.should.have.status(201); // status 201 for created
    //                 res.body.should.be.a('object')
    //                 res.body.should.have.property('todo_id')
    //                 res.body.should.have.property('description');
    //                 res.body.should.have.property('todo_id').eq(res.body.todo_id)
    //                 done();
    //             });
    //     });
    //     it("It should not create a new todo with description empty", done => {

    //         /* description empty */
    //         const todo = {
    //             description: ""
    //         }

    //         chai.request(server)
    //             .post("/todos")
    //             .send(todo)
    //             .end((err, res) => {
    //                 res.should.have.status(400); // 400 Bad Request, The server ca't understand the request
    //                 res.text.should.be.eq("\"description\" is not allowed to be empty")
    //                 done();
    //             });
    //     });
    // });

    /**
     * Test PUT /todos route
     */
    describe('PUT /todos', () => { 
        it("It should update an existing todo", done => {

            /* Change if needed */
            const todoId = 23;
            const todo = {
                description: "updated from testing again"
            } 

            chai.request(server)
                .put(`/todos/${todoId}`)
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(200); // 200 Response OK
                    res.body.should.be.a('object')
                    res.body.should.have.property('todo_id').eq(todoId)
                    res.body.should.have.property('description').eq("updated from testing again");
                    done();
                });
        });

        it("It should not update an existing todo with description length less than 3", done => {

            /* Change if needed */
            const todoId = 23;
            const todo = {
                description: "OG"
            } 

            chai.request(server)
                .put(`/todos/${todoId}`)
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(400); // 400 Bad Request, The server ca't understand the request
                    res.text.should.be.eq("\"description\" length must be at least 3 characters long")
                    done();
                });
        });
    });


    /**
     * Test DELETE /todos route
     */
})