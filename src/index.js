/* eslint-disable */
import './index.css';
import List from './todo.js';
import storage from './localStorage.js';

const store = new storage();
const todoList = new List(store);
todoList.display();

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todoList.addWork(activity);
  todoList.display();
  e.target.reset();
});
document.querySelector('.complete-items').addEventListener('click', () => {
  todoList.clearCompletedActivity();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todoList.clearAll();
});