import axios from "axios";
export default {
  login(user, pass, url) {
    return axios.post(
      url + "/oauth/token?grant_type=password&username=admin&password=admin",
      {},
      {
        auth: {
          username: user,
          password: pass,
        },
        Accept: "*/*",
      }
    );
  },
  setUserLogged(userLogged) {
    localStorage.setItem("access_token", JSON.stringify(userLogged));
  },
  getUserLogged() {
    return JSON.parse(localStorage.getItem("access_token"));
  },
  getAuth() {
    return JSON.parse(localStorage.getItem("access_token"));
  },
};
