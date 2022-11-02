import { http } from "./http";

class HttpService {
  get(url) {
    try {
      return new Promise((resolve, reject) => {
        http
          .get(url)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (error) {
      console.error(error);
    }
  }

  post(url, payload) {
    try {
      return new Promise((resolve, reject) => {
        http
          .post(url, payload)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (error) {
      console.error(error);
    }
  }

  put(url, payload) {
    try {
      return new Promise((resolve, reject) => {
        http
          .put(url, payload)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (error) {
      console.error(error);
    }
  }

  delete(url) {
    try {
      return new Promise((resolve, reject) => {
        http
          .delete(url)
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const $http = new HttpService();
