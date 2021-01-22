import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogApi } from './AxiosService'

class BlogsService {
  async getBlogs() {
    const res = await blogApi.get('api/blogs')
    AppState.allBlogs = res.data
  }

  async getOne(id) {
    const res = await blogApi.get('api/blogs/' + id)
    AppState.activeBlog = res.data
    logger.log(AppState.activeBlog)
  }

  async createBlog(blogData) {
    const res = await blogApi.post('api/blogs', blogData)
    logger.log(res)
    this.getBlogs()
  }

  async deleteBlog(blogId) {
    await blogApi.delete('api/blogs/' + blogId)
    this.getBlogs()
  }

  async editBlog(blogId, newTitle) {
    const blogData = { title: newTitle }
    await blogApi.put('api/blogs/' + blogId, blogData)
    this.getBlogs()
  }
}

export const blogsService = new BlogsService()
