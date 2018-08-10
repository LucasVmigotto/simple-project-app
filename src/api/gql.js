import * as axios from 'axios'

export const baseUrl = process.env.BASE_URL_API

export const api = axios.create({
  baseUrl: process.env.BASE_URL_API
})

export function gql (query, variables, http = api) {
  return http.post('/graphql', {
    query, variables
  })
}

api.interceptors.response.use(res => {
  if (res.data.errors) {
    const error = new Error(res.data.error[0].message)
    error.response = res
    return Promise.reject(error)
  }
  return res.data.data
})
