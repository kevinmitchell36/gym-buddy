<template>
  <form
    @submit.prevent='signup'>
  
      <label for='name'>Name</label>
      <input
        id='name'
        v-model='name'
        type='text'
        name='name'
      >  
   
      <label for='username'>Username</label>
      <input
        id='username'
        v-model='username'
        type='text'
        name='username'
      >  
    
      <label for='email'>Email</label>
      <input
        id='email'
        v-model='email'
        type='text'
        name='email'
      >  
   
      <label for='password'>Password</label>
      <input
        id='password'
        v-model='password'
        type='text'
        name='password'
      >  
    
      <label for='password_confirm'>Password confirmation</label>
      <input
        id='password_confirm'
        v-model='password_confirm'
        type='text'
        name='password_confirm'
      > 
     <button type='submit'>Submit</button>
  
    
  </form>
  
</template>

<script>

import UserService from '../UserService'
  
export default {
  //Names template
  name: 'SignupComponent',
  data() {
    return {
      //Pull from backend?
      errors: [],
      name: '',
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async signup () {
      await UserService.newUserPost(this.name, this.username, this.email, this.password);
    } 
  }
}







</script>