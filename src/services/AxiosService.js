import Axios from 'axios'

export const blogApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 5000
})

export const setBearer = function(bearer) {
  blogApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  blogApi.defaults.headers.authorization = ''
}
