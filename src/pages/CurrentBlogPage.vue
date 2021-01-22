<template>
  <h1>{{ blog.name }}</h1>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'CurrentBlog',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await blogsService.getOne(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      blog: computed(() => AppState.activeBlog)
    }
  }
}
</script>
