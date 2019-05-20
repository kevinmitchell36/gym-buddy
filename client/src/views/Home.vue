<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserComponent from '@/components/UserComponent.vue'

export default {
  name: 'home',
  components: {
    UserComponent
  }
}
</script>
