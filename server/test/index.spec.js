const assert = require('assert');
const { app } = require('../index');
const { request, expect } = require('chai');

// describe
describe('Test Get All todos', () => { 
    // Test for GET /todos
    it('should GET / todos',  async ()=>{
        const result = await request(app).get('/todos');
        expect(result).to.have.status(200);

    })    
});