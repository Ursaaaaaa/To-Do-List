class List {
    constructor() {
      this.list = JSON.parse(localStorage.getItem('todolist'));
      if (!this.list) {
        this.list = [];
      }
      this.display();
    }
  
    display() {
      this.saveData();
      const listSection = document.querySelector('.listed-items');
      listSection.innerHTML = '';
      this.list.forEach((work) => {
        let taskItem = `
       <li class="list-items" id="item-data-${work.index}">`;
        if (work.completed) {
          taskItem += `
              <span class="material-icons done update-status" data="${work.index}">
                done
              </span>
              <p contenteditable="true" class="completed work" data="${work.index}">
                ${work.description}
              </p>
              `;
        } else {
          taskItem += `
              <span class="material-icons  update-status"  data="${work.index}">
                check_box_outline_blank
              </span>
              <p contenteditable="true" class="work" data="${work.index}">
                ${work.description}
              </p>`;
        }
        taskItem += `
            <span class="material-icons delete-work" data="${work.index}">
              delete
            </span>
          </li>
        `;
        listSection.innerHTML += taskItem;
      });
      this.activateActions();
    }
  
    addWork(work) {
      if (work || work === 0) {
        const newWork = {
          description: work,
          completed: false,
          index: this.list.length,
        };
        this.list.push(newWork);
        this.display();
      }
    }
  
    updateActivityStatus(workIndex) {
      if (workIndex !== undefined) {
        if (this.list[workIndex].completed === true) {
          this.list[workIndex].completed = false;
        } else {
          this.list[workIndex].completed = true;
        }
      }
      this.display();
    }
  
    deleteWork(workIndex) {
      if (workIndex) {
        this.list.splice(workIndex, 1);
        this.display();
      }
    }
  
    clearCompletedActivity() {
      this.list = this.list.filter((work) => work.completed === false);
      this.display();
    }
  
    clearAll() {
      this.list.splice(0);
      this.display();
    }
  
    saveData() {
      for (let i; i < this.list.length; i += 1) {
        this.list[i].index = i;
      }
      this.list.sort((a, b) => {
        if (a.index < b.index) return -1;
        if (a.index > b.index) return 1;
        return 0;
      });
      localStorage.setItem('todolist', JSON.stringify(this.list));
    }
  
    editActivity(index, description) {
      this.list[index].description = description;
      this.saveData();
    }
  
    activateActions() {
      const deleteBtns = document.querySelectorAll('.delete-work');
      if (deleteBtns) {
        deleteBtns.forEach((work) => {
          work.addEventListener('click', () => {
            this.deleteWork(work.getAttribute('data'));
          });
        });
      }
      const activities = document.querySelectorAll('.work');
      if (activities) {
        activities.forEach((work) => {
          work.addEventListener('input', (e) => {
            const description = e.target.innerText;
            const index = e.target.getAttribute('data');
            this.editActivity(index, description);
          });
        });
      }
    }
  }
  
  export default List;