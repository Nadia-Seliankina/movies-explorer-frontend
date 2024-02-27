//POST https://api.movie.seliankina.nomoredomainswork.ru/users/signup - createUser
//POST https://api.movie.seliankina.nomoredomainswork.ru/users/signin - login
//DELETE https://api.movie.seliankina.nomoredomainswork.ru/users/signout - deleteJWT
//GET https://api.movie.seliankina.nomoredomainswork.ru/users/me - getUserActive
//PATCH https://api.movie.seliankina.nomoredomainswork.ru/users/me - updateUserProfile

//PATCH https://api.movie.seliankina.nomoredomainswork.ru/* - NotFoundError

//GET https://api.nomoreparties.co/beatfilm-movies/movies - getMovies
//POST https://api.nomoreparties.co/beatfilm-movies/movies - createMovie
//DELETE https://api.nomoreparties.co/beatfilm-movies/movies/:BDmovieId - deleteMovie

class MainApi {
    constructor({ url }) {
      this._url = url;
    }
  
    getUserMovies() {
      return fetch(`${this._url}`, {}).then((res) => {
        console.log(res);
        //return res.ok
          //? res.json()
          //: res.json().then((errData) => Promise.reject(errData));
      });
    }
  }
  
  const mainApi = new MainApi({
    //url: "https://api.nomoreparties.co/beatfilm-movies",
    url: 'http://localhost:3001'
  });
  
  export default mainApi;