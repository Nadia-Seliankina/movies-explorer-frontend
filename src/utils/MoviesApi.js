class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }

  getAllMovies() {
    return fetch(`${this._url}`, {}).then((res) => {
      // console.log(res);
      return res.ok
        ? res.json()
        : res.json().then((errData) => Promise.reject(errData));
    });
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
