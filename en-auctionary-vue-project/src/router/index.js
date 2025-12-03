import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import CreateAccount from "../views/pages/CreateAccount.vue"
import Items from "../views/pages/Items.vue"
import Item from "../views/pages/Item.vue"
import AddItem from "../views/pages/AddItem.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/create_account", component: CreateAccount },
    { path: "/items", component: Items},
    { path: "/item/:id", component: Item},
    { path: "/add_item", component: AddItem},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;