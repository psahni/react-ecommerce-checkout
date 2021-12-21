const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

class Http {
  constructor() {
    console.log("constructor() http");
  }

  async get(url, options = {}) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  async post(url, options = {}) {
    const response = await fetch(url, { 
      ...options, 
      ...{ method: 'POST'}, 
      ...defaultHeaders
    });
    const data = await response.json();
    return data;
  }

  async put() {}
  async delete() {}
}

const $http = new Http;
export default $http;
