const _ = require('lodash');
import auth from '../auth'

export default class AuthService {

  users = [];

  user = null;

  onAuthStateChanged = (callback) => {
    this.callback = callback;
    this.onStateChange();
  }

  addUser = (username, password) => {
    this.users.push({username, password});
  }

  login = (username, password) => {
    if (_.find(this.users, {username, password})) {
      this.user = {username};
    }
    this.onStateChange();
    return Promise.resolve(this.user);
  }

  onStateChange = async () => {
    await auth.executeStateChange(this.callback, this.user);
  }

  logout = () => {
    this.user = null;
    this.onStateChange();
  }

}
