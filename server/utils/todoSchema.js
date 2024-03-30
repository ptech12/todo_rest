const Joi = require('joi');


const todoSchema = Joi.object({
    description: Joi.string().min(3).required()
})

exports.validateTask = (todo) => todoSchema.validate(todo)