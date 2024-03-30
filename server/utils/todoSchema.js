const Joi = require('joi');

const todoSchema = Joi.object({
    // Setting validation rules for the 'description' field: it must be a string, have a minimum length of 3 characters, 
    // and be required
    description: Joi.string().min(3).required()
})

/**
 * 
 * @param {object} todo - body of the request
 * @returns error if validation not accepted
 */
exports.validateTask = (todo) => todoSchema.validate(todo)