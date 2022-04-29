import './index.css';
import List from './todo.js';

const todoList = new List();
todoList.display();

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todoList.addWork(activity);
  e.target.reset();
});
document.querySelector('.complete-items').addEventListener('click', () => {
  todoList.clearCompletedActivity();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todoList.clearAll();
});