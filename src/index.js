import './index.css';
import List from './todo.js';

const todolist = new List();
todolist.display();

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todolist.addWork(activity);
  e.target.reset();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todolist.clearAll();
});