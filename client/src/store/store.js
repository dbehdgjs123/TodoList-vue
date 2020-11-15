import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todos: storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, item) {
      const obj = { completed: false, item: item };
      localStorage.setItem(item, JSON.stringify(obj));
      state.todos.push(obj);
    },
    removeTodo(state, items) {
      const { item, index } = items;
      localStorage.removeItem(item.item);
      state.todos.splice(index, 1);
    },
    completeTodo(state, items) {
      const { item, index } = items;
      state.todos[index].completed = !state.todos[index].completed;
      localStorage.setItem(item.item, JSON.stringify(state.todos[index]));
    },
    clearTodo(state) {
      localStorage.clear();
      state.todos = [];
    },
  },
});
