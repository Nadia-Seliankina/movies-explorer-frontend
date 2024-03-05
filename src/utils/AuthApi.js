//export const BASE_URL = 'https://api.movie.seliankina.nomoredomainswork.ru';
export const BASE_URL = "http://localhost:3001";

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
    })
    //.then(checkResponse)
    .then((res) => {
      console.log(res);
      console.log('API register');
      return res.ok
        ? res.json()
        : res.json().then((errData) => Promise.reject(errData));
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    })
   //.then(checkResponse);
   .then((res) => {
    console.log(res);
    console.log('API authorize');
    return res.ok
      ? res.json()
      : res.json().then((errData) => Promise.reject(errData));
  });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": 'application/json',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
  //.then(checkResponse);
  .then((res) => {
    console.log(res);
    console.log('API checkToken');
    return res.ok
      ? res.json()
      : res.json().then((errData) => Promise.reject(errData));
  });
};

//export const deleteJWT = (token) => {
    //return fetch(`${BASE_URL}/users/signout`, {
      //method: "DELETE",
      //headers: {
        //"Accept": 'application/json',
        //"Content-Type": "application/json",
        //"Authorization": `Bearer ${token}`,
      //},
    //}).then(checkResponse);
//};

const checkResponse = (res) => res.ok ? res.json() : res.json().then((errData) => Promise.reject(errData));
//const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`);