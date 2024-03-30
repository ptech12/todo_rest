const Joi = require('joi');


const todoSchema = {
    description: Joi.string.required()
}

exports.validateTask = (todo) => Joi.validate(todo, todoSchema);