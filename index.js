const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views', './views');


var todos = [
      {content: 'Đi học'},
      {content: 'Nấu cơm'},
      {content: 'Rửa bát'},
      {content: 'Học code tại CodersX'}
    ];

app.get('/todos', function(req, res) {
	res.render('index', {
		todos: todos
	});
})

app.get('/todos/search', function(req,res) {
	var q = req.query.q;
	var matchedTodo = todos;
	if (q) {
		matchedTodo = todos.filter(function(todo) {
		return todo.content.toLowerCase().indexOf(q.toLowerCase()) !== -1;
		});
	}
	res.render('index', {
		todos: matchedTodo,
		q: q
	});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))