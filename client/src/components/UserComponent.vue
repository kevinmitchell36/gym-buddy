<template>
  
  <div class="container">
    <p>Welcome </p>
  </div>
</template>

<script>

import UserService from '../UserService'
export default {
  name: 'UserComponent',
  data() {
    return {
      users: [],
      error: ""
    }
  },
  async created() {
    try {
      this.users = await UserService.getUsers();
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
