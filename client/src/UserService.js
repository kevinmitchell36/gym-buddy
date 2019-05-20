// Handles axios request 

import axios from 'axios';

const url = 'http://localhost:3000/api/users';


class UserService {

  static getUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(user => ({
            ...user
          }))
        );
      } catch(err) {
        reject(err);
      }
    })
  }
}

export default UserService;
