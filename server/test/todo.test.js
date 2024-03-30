import {chai} from 'chai'
const chaiHttp = require('chai-http');
const { app } = require('../index'); // Assuming your Express app instance is exported from app.js
const { expect } = chai;

chai.use(chaiHttp);

describe('TODO API', () => {
  // Test for GET /todos
  describe('GET /todos', () => {
    it('should return all todos', async () => {
      const res = await request(app).get('/todos');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      // Add more assertions as needed
    });
  });

  // Test for GET /todos/:id
  describe('GET /todos/:id', () => {
    it('should return a single todo by id', async () => {
      const res = await request(app).get('/todos/1'); // Assuming you have a todo with id 1
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      // Add more assertions as needed
    });
  });

  // Test for POST /todos
  describe('POST /todos', () => {
    it('should create a new todo', async () => {
      const newTodo = { description: 'Test todo' };
      const res = await request(app).post('/todos').send(newTodo);
      expect(res).to.have.status(201);
      expect(res.body).to.be.an('object');
      // Add more assertions as needed
    });
  });

  // Test for PUT /todos/:id
  describe('PUT /todos/:id', () => {
    it('should update a todo by id', async () => {
      const updatedTodo = { description: 'Updated test todo' };
      const res = await request(app).put('/todos/1').send(updatedTodo); // Assuming you have a todo with id 1
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      // Add more assertions as needed
    });
  });

  // Test for DELETE /todos/:id
  describe('DELETE /todos/:id', () => {
    it('should delete a todo by id', async () => {
      const res = await request(app).delete('/todos/1'); // Assuming you have a todo with id 1
      expect(res).to.have.status(200);
      // Add more assertions as needed
    });
  });
});
