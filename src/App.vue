<template>
  <div id="app">
<!--    <div>{{ usersCount }}</div>-->
    <div class="links">
      <router-link to="/new-user">New user</router-link>
      <router-link to="/users">Users</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 500px;
  margin: 50px auto;
}
#app a{
  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 30px;
  border: 1px solid #2c3e50;
  color: #2c3e50;
  text-decoration: none;
}

.links{
  display: flex;
  justify-content: center;
}
</style>
