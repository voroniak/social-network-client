import Api from "./Api";
import AuthStore from './AuthStore';

export default class AuthApi {

  static isSignedIn() {
    return !!AuthStore.getToken();
  }

  login = async (data) => {
    const response = await Api.post("Auth/signin", data)
      .then(response => {
        if (response.data.token !== null) {
          AuthStore.setToken(response.data.token);
        }
      });
    return response;
  };

  register = async (data) => {
    const response = await Api.post("Auth/signup", data)
      .then(response => {
        notificationLogic('success', response.data.value);
      });
    return response;
  };

  logout = async () => {
    AuthStore.removeToken();
  };

}