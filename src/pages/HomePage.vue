<template>
  <div class="container-fluid">
    <div class="row" v-if="state.user.isAuthenticated">
      <form @submit.prevent="createBlog">
        <div class="form-group-inline">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            v-model="state.newBlog.title"
            class="form-control"
            placeholder="Title..."
            aria-describedby="helpId"
          />
        </div>
        <div class="form-group-inline">
          <label for="body">Body</label>
          <input
            type="text"
            name="body"
            id="body"
            v-model="state.newBlog.body"
            class="form-control"
            placeholder="thoughts..."
            aria-describedby="helpId"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add Blog
        </button>
      </form>
    </div>
    <div class="row">
      <Blog v-for="singleBlog in state.allBlogs" :key="singleBlog._id" :blog-prop="singleBlog" />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { logger } from '../utils/Logger'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import Blog from '../components/Blog.vue'

export default {
  name: 'HomePage',
  setup() {
    const router = useRouter()
    const state = reactive({
      allBlogs: computed(() => AppState.allBlogs),
      user: computed(() => AppState.user),
      newBlog: {}
    })
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      async createBlog() {
        try {
          const id = await blogsService.createBlog(state.newBlog)
          state.newBlog = {}
          router.push({ name: 'CurrentBlog', params: { id } })
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {
    Blog
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
