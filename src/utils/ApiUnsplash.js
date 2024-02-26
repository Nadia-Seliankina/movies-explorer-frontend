class Api {
    constructor({ baseUrl, apiKey }) {
        this._baseUrl = baseUrl;
        this._apiKey = apiKey;
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/search/photos?query=${searchQuery}&per_page=12`, {
            headers: {
                Authorization: `Client-ID ${this._apiKey}`
            }
        }).then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject({ error: err, status: res.status })))
    }
}

const config = {
    baseUrl: 'https://api.unsplash.com',
    apiKey: 'LI_ZOdUwm-ejNPWFyYG-1L6hUu-UKxxMFkZk8pfpRBk'
}

const api = new Api(config);

export default api;