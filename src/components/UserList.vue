<template>
  <div>
  <div class="users" v-for="user in validUsers" :key="user.id">
    <div>{{ user.name }}</div>
    <div>{{ user.phone }}</div>
    <div>{{ user.email }}</div>
  </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  computed: mapGetters(['validUsers', 'usersCount']),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts()
        .then((responce) => {
          if (responce.data) {
            console.log('users arrived')
          }
        })
  },
}
</script>

<style scoped>
.users{
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #2c3e50;
  color: #2c3e50;
}

</style>