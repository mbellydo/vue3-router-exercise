<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="todo" placeholder="Add a todo" />
    <button type="submit">Add Todo</button>
  </form>
</template>


<script>
export default {
  inject: ["todos"],
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    submitForm() {
      if (this.todo?.trim()) {
        this.todos.push({ id: new Date().toString, name: this.todo });
        // TODO navigate to /todos
        this.$router.push({ name: "todos" });
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

input {
  border-radius: 5px;
  height: 30px;
  min-width: 250px;
}

button {
  font: inherit;
  border: 1px solid #18574c;
  background-color: #18574c;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 9px;
  margin-left: 1rem;
}

button:hover,
button:active {
  border-color: #18574c;
  background-color: #18574c;
}
</style>