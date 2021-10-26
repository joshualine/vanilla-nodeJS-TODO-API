const fs = require('fs')

let todos = require('../data/todo.json')

// let todos = fs.readdirSync('./data', (err, files) => {
    // if (err) {
    //     let json = { status: false, message: 'It seems there is a mistake somewhere' };
    //     JSON.stringify(json)
    // } else {
    //     let json = { status: true, message: 'Files Retrieved:', data: files };
    //     // console.log(JSON.stringify(json))
        // JSON.stringify(files)
    //     // return json;
    // }
// })

const { v4: uuidv4 } = require('uuid')

// const { writeDataToFile } = require('../utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(todos)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const todo = todos.find((p) => p.id === id)
        resolve(todo)
    })
}

function create(todo) {
    return new Promise((resolve, reject) => {
        const newtodo = { id: uuidv4(), ...todo }
        todos.push(newtodo)
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/todos.json', todos);
        }
        resolve(newtodo)
    })
}

function update(id, todo) {
    return new Promise((resolve, reject) => {
        const index = todos.findIndex((p) => p.id === id)
        todos[index] = { id, ...todo }
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/todos.json', todos);
        }
        resolve(todos[index])
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        todos = todos.filter((p) => p.id !== id)
        if (process.env.NODE_ENV !== 'test') {
            writeDataToFile('./data/todos.json', todos);
        }
        resolve()
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}