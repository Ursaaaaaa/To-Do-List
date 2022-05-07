const List = require('./todo.js');

jest.mock('./localStorage.js');
let list = [
  { id: 1, description: 'first task', completed: true },
  { id: 2, description: 'second task', completed: true },
];


const todoList = new List(list);
const item = 'my task to add or remove';

describe('Add and delete function', () => {
  test('should add one item int the list', () => {
    list = todoList.addWork(item);
    expect(list.length).toBe(3);
  });
  test('should remove one item in the list', () => {
    list = todoList.deleteWork(item);
    expect(list.length).toBe(2);
  });
});


describe('edit, update and clear function', () => {
    test('clear complete task', () => {
      list = todoList.clearCompletedActivity(item);
      expect(list.length).toBe(0);
    });
  });