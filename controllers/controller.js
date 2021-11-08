const { getPostData } = require('../utils/utils')
const Todo = require('../models/todoModel')

// @desc    Gets All todos
// @route   GET /api/todos
async function getTodos(req, res) {
  try {
    const todos = await Todo.findAll()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(todos))
  } catch (error) {
    console.log(error)
  }
}

// @desc    Gets Single Todo
// @route   GET /api/todo/:id
async function getOneTodo(req, res, id) {
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
  getOneTodo
}