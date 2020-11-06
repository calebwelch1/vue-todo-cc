<template>
  <div>
    <HelloWorld
      msg="To Do App"
      v-bind:incomplete="remaining"
      v-bind:complete="complete"
      v-bind:totalTodos="total"
    />
    <div class="md-layout md-gutter">
      <div class="md-layout-item" />

      <div class="md-layout-item md-size-75">
        <md-field md-clearable>
          <label>Add Something Todo</label>
          <md-input v-model="newTodo" class="todo-input" @keyup.enter="addTodo">
          </md-input>
        </md-field>
        <div v-if="todos.length === 0">
          <md-empty-state
            class="md-accent"
            md-rounded
            md-icon="speaker_notes_off"
            md-label="No Todos"
            md-description="Create a Todo and it will show up here."
          >
          </md-empty-state>
        </div>
      </div>
      <div class="md-layout-item" />
    </div>

    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div class="md-layout md-gutter">
        <div class="md-layout-item" />

        <div class="md-layout-item md-size-100">
          <div class="md-layout">
            <div class="md-layout-item">
              <md-switch v-model="todo.completed"></md-switch>
            </div>
            <div class="md-layout-item md-size-50">
              <div class="todo-item-left" :class="{ done: todo.completed }">
                {{ todo.title }}
                <md-button
                  v-if="!todo.completed"
                  class="md-fab md-mini md-plain"
                  style="margin-top:-10px;"
                  @click="editTodo(todo)"
                >
                  <md-icon>edit</md-icon>
                </md-button>
                <md-button
                  v-if="todo.completed"
                  disabled
                  class="md-fab md-mini md-plain"
                  style="margin-top:-10px;"
                  @click="editTodo(todo)"
                >
                  <md-icon>edit</md-icon>
                </md-button>
                <div class="edit-todo" v-if="todo.editing">
                  <input
                    class="todo-item-edit"
                    type="text"
                    v-model="todo.title"
                    @keyup.enter="finishEditTodo"
                  />
                  <md-button
                    class="save-edit-todo md-fab md-mini md-plain"
                    @click="finishEditTodo(todo)"
                  >
                    <md-icon>save</md-icon>
                  </md-button>
                </div>
              </div>
            </div>
            <div class="md-layout-item">
              <div class="remove-item" @click="removeTodo(index)">
                &times;
              </div>
            </div>
          </div>

          <div class="md-layout-item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  name: "todolist",
  components: {
    HelloWorld,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 0,
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      });
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      todo.editing = true;
    },
    finishEditTodo(todo) {
      if (todo.title.trim().length == 0) {
        return;
      }
      todo.editing = false;
    },
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    total() {
      return this.todos.length;
    },
    complete() {
      return this.todos.filter((todo) => todo.completed).length;
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: rgba(40, 40, 40, 0.5);
}
.todo-input {
  width: 100%;
  padding: 20px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &focus {
    outline: 0;
  }
}
.todo-item {
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
.todo-item-edit {
  font-size: 24px;
  color: #333;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Roboto", Helvetica;
  &foxus {
    outline: none;
  }
}
.smallIcon {
  font-size: 2px;
}
</style>
