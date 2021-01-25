import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogApi } from './AxiosService'

class CommentsService {
  async getComments(blogId) {
    const res = await blogApi.get('api/blogs/' + blogId + '/comments')
    AppState.blogComments = res.data
    // logger.log(AppState.blogComments)
  }

  async createComment(commentData) {
    logger.log('Creating Comment in Service')
    const res = await blogApi.post('api/comments', commentData)
    AppState.blogComments.push(res)
    logger.log(res)
    this.getComments()
  }

  async deleteComment(commentId) {
    await blogApi.delete('api/comments' + commentId)
    this.getComments()
  }

  async editComment(commentId, newTitle) {
    const commentData = { title: newTitle }
    await blogApi.put('api/comments/' + commentId, commentData)
    this.getComments()
  }
}

export const commentsService = new CommentsService()
