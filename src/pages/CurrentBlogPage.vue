<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1>{{ blog.title }}</h1>
        <form @submit.prevent="createComment">
          <input
            type="text"
            name="blogId"
            id="blogId"
            v-model="state.newComment.body"
            class="form-control"
            placeholder="Your comment here"
            aria-describedby="commentId"
          />
          <button class="btn btn-primary text-center">
            Add Comment
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Comment v-for="singleComment in comments" :key="singleComment.id" :comment-prop="singleComment" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import { commentsService } from '../services/CommentsService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import router from '../router'
export default {
  name: 'CurrentBlog',
  setup() {
    const route = useRoute()
    const state = reactive({
      newComment: {}
    })
    onMounted(async() => {
      try {
        await blogsService.getOne(route.params.id)
        await commentsService.getComments(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.blogComments),

      async createComment() {
        try {
          // NOTE How do I pass the blogId to the createComment??
          const id = await commentsService.createComment(state.newComment)
          state.newComment = {}
          router.push({ name: 'CurrentComments', params: { id } })
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>
