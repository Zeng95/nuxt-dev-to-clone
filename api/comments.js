const END_POINT = '/comments'

// Fetch all comments belonging to an article
export function getCommentsByArticleId(axios, articleId) {
  return axios.get(`${END_POINT}`, {
    params: {
      a_id: articleId
    }
  })
}
