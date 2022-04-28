import './index.css';

const toDoList = [
  {
    description: 'Wash Car',
    completed: true,
    index: 0,
  },

  {
    description: 'Join Shai Conference',
    completed: true,
    index: 1,
  },
  {
    description: 'Setup Project Tools',
    completed: false,
    index: 2,
  },
  {
    description: 'Buy Groceries',
    completed: false,
    index: 3,
  },
];

const list = document.querySelector('.listed-items');
list.innerHTML = '';
for (let i = 0; i < toDoList.length; i += 1) {
  const work = toDoList[i];
  let workItem = `
      <li class=" list-items">`;
  if (work.completed) {
    workItem += `<span class="material-icons done" onclick="updateStatus(${work.index}, 'pending')">
            done
          </span>
          <p contenteditable="true" class="completed">
            ${work.description}
          </p>
          `;
  } else {
    workItem += `<span class="material-icons check-box" onClick ="UpdateStatus(${work.index}, 'completed')">
                  check_box_outline_blank
                  </span>
                  <p  contenteditable="true">
                  ${work.description}
                  </P>`;
  }
  workItem += `
    <span class="material-icons more-bars">
         more_vert
      </span>
     <!-- <span class="material-icons" onclick="deleteTask(${work.index})">
          delete
        </span> -->
     </li>`;
  list.innerHTML += workItem;
}

toDoList.sort((a, b) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
});
