<template>
  <div class="row">
    <Blog v-for="singleBlog in state.allBlogs" :key="singleBlog._id" :blog-prop="singleBlog" />
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { logger } from '../utils/Logger'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      allBlogs: computed(() => AppState.allBlogs)
    })
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
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
