// TODO fill this file
import { createRouter, createWebHistory } from "vue-router";
import TodoList from "./pages/TodoList.vue";
import AddTodo from "./pages/AddTodo.vue";
import TheFooter from "./components/TheFooter.vue";

const routes = [
    {path: '/', redirect: '/todos'},
    {path: '/todos', component: TodoList},
    {path: '/add-todo', component: AddTodo}
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router;

/*const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/todos",
        },
        {
            name: "todos",
            path: "/todos",
            components: {
                default: TodoList,
                footer: TheFooter,
            },
        },
        {
            name: "add-todo",
            path: "/add-todo",
            components: { 
                default: AddTodo, 
                footer: TheFooter 
            },
        },
    ],
});*/
