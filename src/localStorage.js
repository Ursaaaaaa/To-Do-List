class storage {
    constructor() {
        this.store = []
    }
    getItems() {
        this.store =  JSON.parse(localStorage.getItem('todoList')) || [];
        return this.store;
    }
       
}