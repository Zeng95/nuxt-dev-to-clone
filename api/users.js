const END_POINT = '/users'

// Access a single user by id
export function getUserById(axios, id) {
  return axios.get(`${END_POINT}/${id}`)
}
