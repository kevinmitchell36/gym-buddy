import axios from 'axios'

const url = "http://localhost:3000/api/users/login"

class LoginService {

  static postLogin(username, password) {

    let result = axios.post(url,  {
      username,
      password
    }).then((response) => {
      console.log(response);
      let status = JSON.parse(response.status);
      if (status == '200') {
        window.location.href = '/';
        
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    return result
  } 
}

export default LoginService;