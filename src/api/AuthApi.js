import Api from "./Api";
import AuthStore from './AuthStore';

export default class AuthApi {

  static isSignedIn() {
    return !!AuthStore.getToken();
  }

  login = async (data) => {
    const response = await Api.post("Account/signin", data)
      .then(response => {
        if (response.data.token !== null) {
          AuthStore.setToken(response.data.token);
          console.log(response)
        }
      });
    return response;
  };

  register = async (data) => {
    const response = await Api.post("Auth/signup", data);
    return response;
  };

  logout = async () => {
    AuthStore.removeToken();
  };

}