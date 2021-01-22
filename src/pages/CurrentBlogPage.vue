<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>{{ blog.title }}</h1>
      </div>
    </div>
    <div class="row">
      {{ comment }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import { commentsService } from '../services/CommentsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'CurrentBlog',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await blogsService.getOne(route.params.id)
        await commentsService.getComments(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      blog: computed(() => AppState.activeBlog),
      comment: computed(() => AppState.blogComments)
    }
  }
}
</script>
