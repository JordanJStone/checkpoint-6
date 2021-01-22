import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogApi } from './AxiosService'

class BlogsService {
  async getBlogs() {
    const res = await blogApi.get('api/blogs')
    logger.log(res.data)
    AppState.allBlogs = res.data
  }

  async getOne(id) {
    const res = await blogApi.get(id)
    AppState.activeBlog = res.data
  }

  async create(blog) {
    const res = await blogApi.post('', blog)
    AppState.allBlogs.push(res.data)
    return res.data.id
  }
}

export const blogsService = new BlogsService()
