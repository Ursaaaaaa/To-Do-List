const List = require('./todo.js');

jest.mock('./localStorage.js');
let list = [
  { index: 1, description: 'first task', completed: true },
  { index: 2, description: 'second task', completed: false },
];


const todoList = new List(list);
const item = 'my task to add or remove';

describe('Add and delete function', () => {
  test('should add one item int the list', () => {
    list = todoList.addWork(item);
    expect(list.length).toBe(3);
  });
  test('should remove one item in the list', () => {
    list = todoList.deleteWork(3);
    expect(list.length).toBe(2);
  });
});


describe('edit, update and clear function', () => { 
    const targetIndex  = 2;
    test('edit the description of the target task', () => { 
        const newDescription = "edited task";
        list = todoList.editActivity(targetIndex, newDescription);
        expect(list[1].description).toBe("edited task");
     })
     test('update the status of the target task', () => {
        list = todoList.updateActivityStatus(targetIndex);
        expect(list[1].completed).toBe(true)
     })

    test('clear complete task', () => {
      list = todoList.clearCompletedActivity();
      expect(list.length).toBe(0);
    });

  });