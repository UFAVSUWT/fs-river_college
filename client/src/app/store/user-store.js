import { check, loginAuth } from "../httpService/userApi";
import { makeAutoObservable } from "mobx";
export default class UserStore {
  _user = {};
  _isLoading = false;
  _error = null;
  _auth = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(data, navigate) {
    this.setLoading(true);
    try {
      const userInfo = await loginAuth(data.login, data.password);
      this.setUser(userInfo);
      this.setLoading(false);
      this.setAuth(true);
      navigate("auth");
    } catch (error) {
      this.setError(error.response.data.message);
      this.setLoading(false);
    }
  }

  async checkAuthentication() {
    if (localStorage.getItem("token")) {
      this.setLoading(true);
      try {
        await check().then((data) => {
          this.setUser(data);
          this.setAuth(true);
          this.setLoading(false);
        });
      } catch (error) {
        this.setError(error.response.data.message);
        this.setLoading(false);
      }
    }
  }

  logOut() {
    this._user = {};
    this._auth = false;
    localStorage.removeItem("token");
  }
  setUser(user) {
    this._user = user;
  }
  setLoading(bool) {
    this._isLoading = bool;
  }
  setError(error) {
    this._error = error;
  }
  setAuth(bool) {
    this._auth = bool;
  }
  get user() {
    return this._user;
  }
  get auth() {
    return this._auth;
  }
  get isLoading() {
    return this._isLoading;
  }
  get error() {
    return this._error;
  }
}

/* import { makeAutoObservable, runInAction } from "mobx";
import { loginAuth } from "../httpService/userApi";

export default class UserStore {
  isAuth = false;
  user = {};
  error = null;
  authLoading = false;
  constructor() {
    makeAutoObservable(this);
  }
  setIsAuth(bool) {
    this.isAuth = bool;
  }
  login = async (data) => {
    try {
      this.authLoading = true;
      console.log(data);
      let userInfo = await loginAuth(data.login, data.password);
      runInAction(() => {
        this.isAuth = true;
        this.user = { userInfo };
      });

      this.authLoading = false;
    } catch (error) {
      this.error = error.message;
    } */
/*   try {
      let userInfo = await loginAuth(data.login, data.password);
      user.setUser(userInfo);
      user.setIsAuth(true);
      navigate("auth");
    } catch (e) {
      setIsError(e.response.data.message);
    } */
/*   };
  setUser(user) {
    this.user = user;
  }
  get isAuth() {
    return this.isAuth;
  }
  get user() {
    return this.user;
  }
}
 */
