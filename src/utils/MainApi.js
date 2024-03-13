class MainApi {
  constructor({ url, token }) {
    this._url = url;
  }

  #onResponse(res) {
    return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData));
  }

  getUserActive() {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/users/me`, {
      //credentials: "include",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this.#onResponse);
  }

  updateUserProfile(name, email) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email })
    }).then(this.#onResponse);
  }

  getMyMovies() {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies`, {
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this.#onResponse);
  }

  createMovie(data) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data)
    }).then(this.#onResponse);
  }

  deleteMovie(BDmovieId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/movies/${BDmovieId}`, {
      method: 'DELETE',
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this.#onResponse);
  }

  //NotFoundError() {
    //return fetch(`${this._url}/*`, {
      ////credentials: "include",
      //headers: {
        //"Content-Type": "application/json",
        //authorization: this._token
      //},
      //body: JSON.stringify()
    //}).then(this.#onResponse);
  //}
}

const mainApi = new MainApi({
  //url: "https://api.movie.seliankina.nomoredomainswork.ru",
  url: "http://localhost:3001",
});

export default mainApi;
