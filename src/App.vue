<template>
  <div id="app">
    <div>
      <ul>
        <li><router-link :to="{ name: 'list'}">List</router-link></li>
        <li><router-link :to="{ name: 'edit'}">Edit</router-link></li>
        <li><router-link :to="{ name: 'create'}">Create</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
ul {
  display: flex;
}
li {
  padding: 20px;
  text-decoration: none;
  list-style: none;
}
</style>
