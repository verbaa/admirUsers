import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

let router = new Router({
    routes: [
        {
            path: '/new-user',
            name: 'userForm',
            component: UserForm,
            props: true
        },
        {
            path: '/users',
            name: 'userList',
            component: UserList,
            props: true
        }

    ]
})

export default router;