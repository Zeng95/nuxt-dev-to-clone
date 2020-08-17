const END_POINT = '/articles'

// Access a list of articles
export function getArticles(axios) {
  return axios.get(END_POINT)
}

// Access an article content
export function getArticleById(axios, id) {
  return axios.get(`${END_POINT}/${id}`)
}
