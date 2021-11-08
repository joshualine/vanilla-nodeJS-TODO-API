let todos = require('../data/todo.json');
const { v4: uuidv4 } = require('uuid')
const { writeDataToFile } = require('../utils/utils')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(todos)
  })
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const todo = todos.find((t) => t.id === id)
    resolve(todo)
  })
}

function createTodo(todo) {
  return new Promise((resolve, reject) => {
    const newTodo = {id: uuidv4(), ...todo}
    todos.push(newTodo)
    writeDataToFile('./data/todos.json', todos);
    resolve(todos)
  })
}

function updateTodo(id, newTodo) {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((t) => t.id === id)
    todos[index] = {id, ...newTodo}
    writeDataToFile('./data/todos.json', todos);
    resolve(todos[index])
  })
}

function deleteTodo(id) {
  return new Promise((resolve, reject) => {
    todos = todos.filter((t) => t.id !== id)
    writeDataToFile('./data/todos.json', todos);
    resolve()
  })
}

module.exports = {
  findAll,
  findById,
  createTodo,
  updateTodo,
  deleteTodo
}