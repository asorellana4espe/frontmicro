import auth from "./Controllers/Auth";
export default {
  isAuthenticated() {
    return !!auth.getUserLogged();
  },
};
