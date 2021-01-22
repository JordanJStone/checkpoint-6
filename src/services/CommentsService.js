import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogApi } from './AxiosService'

class CommentsService {
  async getComments(blogId) {
    const res = await blogApi.get('api/blogs/' + blogId + '/comments')
    AppState.blogComments = res.data
  }

  async createComment() {
    const res = await blogApi.post('api/comments')
    logger.log(res)
    this.getComments()
  }

  async deleteComment(commentId) {
    await blogApi.delete('api/comment/' + commentId)
    this.getComments()
  }

  async editComment(commentId, newTitle) {
    const commentData = { title: newTitle }
    await blogApi.put('api/comments/' + commentId, commentData)
    this.getComments()
  }
}

export const commentsService = new CommentsService()
