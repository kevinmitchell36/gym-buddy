<template>
  <form
    @submit.prevent='login'>
   
      <label for='username'>Username</label>
      <input
        id='username'
        v-model='username'
        type='text'
        name='username'
      >   
   
      <label for='password'>Password</label>
      <input
        id='password'
        v-model='password'
        type='text'
        name='password'
      >  

      <button type='submit'>Login</button>
  
    
  </form>
  
</template>

<script>
  
  import LoginService from '../LoginService'

  export default {
    name: 'LoginComponent',
    data() {
      return {
        errors: [],
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        await LoginService.postLogin(this.username, this.password);
      }
    }
  }



</script>