const http = require('http');
const { getTodos, getOneTodo } = require('./controllers/controller')


const httpServer = http.createServer((req, res) => {
  //Get request
  if(req.url === '/api/todos' && req.method === 'GET') {
    getTodos(req, res);
  } else if (req.url.match(/\/api\/todos\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3]
    getOneTodo(req, res, id)
  } else if (req.url === '/api/todos/' && req.method === 'POST') {
    // addTodo()
  } else if (req.url.match(/\/api\/todos\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3]
    // editTodo()
  } else if (req.url.match(/\/api\/todos\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3]
    // deleteTodo()
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route Not Found' }))
  }
});


const PORT = process.env.PORT || 3000
httpServer.listen(PORT, console.log('listening on port 3000'));