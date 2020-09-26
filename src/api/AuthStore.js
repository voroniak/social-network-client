export default class AuthStore {
    static STORAGE_KEY = "token";

    static getToken() {
        return window.localStorage.getItem(AuthStore.STORAGE_KEY);
    }

    static setToken(token) {
        window.localStorage.setItem(AuthStore.STORAGE_KEY, token);
    }

    static removeToken() {
        window.localStorage.removeItem(AuthStore.STORAGE_KEY);
    }
}