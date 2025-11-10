const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let tasks = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const newTask = req.body.task;
  if (newTask) tasks.push(newTask);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const index = parseInt(req.body.index);
  if (!isNaN(index)) tasks.splice(index, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});