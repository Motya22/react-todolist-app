import converter from './converter';

class TodosApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  getFullUrlWithQueries(queries) {
    return `${this.url}?${queries}`;
  }

  getTodos() {
    const fullUrl = this.getFullUrlWithQueries('_limit=5');

    return fetch(fullUrl)
      .then((res) => res.json())
      .then((responseData) => converter(responseData));
  }
}

export default new TodosApi({ url: 'https://jsonplaceholder.typicode.com/todos', });
