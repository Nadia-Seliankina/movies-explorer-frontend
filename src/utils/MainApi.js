//POST https://api.movie.seliankina.nomoredomainswork.ru/users/signup - createUser
//POST https://api.movie.seliankina.nomoredomainswork.ru/users/signin - login
//DELETE https://api.movie.seliankina.nomoredomainswork.ru/users/signout - deleteJWT

class MainApi {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
  }

  #onResponse(res) {
    return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData));
  }

  getUserActive() {
    return fetch(`${this._url}/users/me`, {
      //credentials: "include",
      headers: {
        //"Content-Type": "application/json",
        authorization: this._token
      },
    }).then(this.#onResponse);
  }

  updateUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token
      },
      body: JSON.stringify(data)
    }).then(this.#onResponse);
  }

  getMyMovies() {
    return fetch(`${this._url}/movies`, {
      //credentials: "include",
      headers: {
        //"Content-Type": "application/json",
        authorization: this._token
      },
    }).then(this.#onResponse);
  }

  createMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token
      },
      body: JSON.stringify(data)
    }).then(this.#onResponse);
  }

  deleteMovie(BDmovieId) {
    return fetch(`${this._url}/movies/${BDmovieId}`, {
      method: 'DELETE',
      //credentials: "include",
      headers: {
        "Content-Type": "application/json",
        authorization: this._token
      },
    }).then(this.#onResponse);
  }

  NotFoundError(data) {
    return fetch(`${this._url}/*`, {
      //credentials: "include",
      headers: {
        //"Content-Type": "application/json",
        authorization: this._token
      },
      body: JSON.stringify(data)
    }).then(this.#onResponse);
  }
}

const mainApi = new MainApi({
  //url: "https://api.movie.seliankina.nomoredomainswork.ru",
  url: "http://localhost:3001",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyN2JiNDJlYjIwYTZhNjljNjU1MDAiLCJpYXQiOjE3MDkzNzc4NjgsImV4cCI6MTcwOTk4MjY2OH0.33UTm7ErFSJc0qTDU_iXHqizKlEvfVs2CrGMIBzYJo8",
});

export default mainApi;
