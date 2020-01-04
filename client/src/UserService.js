// Handles axios request 

import axios from 'axios';

const url = 'http://localhost:3000/api/users';     


class UserService {

  static getCurrentUser() {   
      console.log(sessionStorage.getItem('req.user.user.id')); 
  }

  static newUserPost(name, username, email, password, password_confirm) {
    return axios.post(url, {
      name, 
      username,
      email,
      password,
      password_confirm
    });
  }
}

export default UserService;
