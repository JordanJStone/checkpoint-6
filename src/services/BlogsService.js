import { AppState } from '../AppState'
import { blogApi } from './AxiosService'
import { logger } from '../utils/Logger'

class BlogsService {
  async getBlogs() {
    const res = await blogApi.get('api/blogs')
    logger.log(res)
    AppState.allBlogs = res.data
  }

  // async getOne(id) {
  //   const res = await blogApi.get(id)
  //   AppState.activeBlog = res.data
  // }
}

export const blogsService = new BlogsService()
