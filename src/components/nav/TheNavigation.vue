<template>
  <header>
    <nav>
      <div>
        <span>Todo app</span>
        <ul>
          <li>
            <!-- TODO Add a router-link to /todos -->
            <router-link to="/todos">Todo list</router-link>
          </li>
          <li>
            <!-- TODO Add a router-link to /add-task -->
            <router-link to="/add-todo">Add todo</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #18574c;
}
nav {
  height: 100%;
}
ul {
  list-style: none;
  margin-top: -50px;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 2rem;
}
a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}
a:hover,
a:active,
a.router-link-active {
  color: white;
  border-color: #82d2d4;
  background-color: #525253;
}
span {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 10px;
  display: inline-block;
}
</style>