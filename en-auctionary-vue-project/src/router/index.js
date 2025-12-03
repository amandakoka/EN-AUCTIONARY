import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import CreateAccount from "../views/pages/CreateAccount.vue"
import Items from "../views/pages/Items.vue"
import Item from "../views/pages/Item.vue"
import AddItem from "../views/pages/AddItem.vue"
import Account from "../views/pages/Account.vue"

// checks if user is authenticated and logged in, if not redirects to login page
const ifAuthenticated = (to, from, next) => {
    const loggedIn = localStorage.getItem("session_token");
    if (loggedIn) {
        next();
        return;
    }
    next("/login");
}
const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/create_account", component: CreateAccount },
    { path: "/items", component: Items},
    { path: "/item/:id", component: Item},
    // pages only accessible if logged in
    { path: "/add_item", component: AddItem, beforeEnter: ifAuthenticated},
    { path: "/account", component: Account, beforeEnter: ifAuthenticated},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;