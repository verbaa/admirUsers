import axios from "axios";
export default {
    actions: {
        fetchPosts({commit}){
            return axios('https://5f59fc01b121580016cae0c5.mockapi.io/users', {
                methods: "GET"
            })
                .then((users) => {
                    commit('updatePosts', users.data)
                    return users;
                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }
    },
    mutations: {
        updatePosts(state, users) {
            state.users = users
        },
        createUser(state, newUser) {
            state.users.unshift(newUser)
        }
    },
    state: {
        users: []
    },
    getters: {
        validUsers(state) {
            return state.users.filter(u => {
                return u.name && u.phone && u.email
            })
        },
        allPosts(state) {
            return state.users
        },
        usersCount(state, getters){
            return getters.validUsers.length
        }
    },
}