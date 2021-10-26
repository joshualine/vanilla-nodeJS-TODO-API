const Todo = require('../models/todoModel')

// @disc    Gets All Todos
// @route   GET /api/todos
async function getTodos(req, res) {
    try {
        // get the todos.
        const todos = await Todo.findAll()
        // set the status code, and content-type
        res.writeHead(200, { 'Content-Type': 'application/json' })
        // send the data
        res.end(JSON.stringify(todos))
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single Product
// @route   GET /api/product/:id
async function getProduct(req, res, id) {
    try {
        const todo = await Todo.findById(id)

        if (!todo) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Todo Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(todo))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTodos,
    getProduct
}