<template>
  <div class="Blog col-4 text-center">
    <h2 :contenteditable="state.editBlog" @blur="editBlog">
      {{ blogProp.title }}
    </h2>
    <router-link :to="{name: 'CurrentBlog', params: {id: blogProp.id}}">
      <h4>
        Author: {{ blogProp.creator.name }}
      </h4>
    </router-link>
    <i class="fa fa-pencil fa-2x" aria-hidden="true" v-if="state.account.id == blogProp.creatorId" @click="state.editBlog = !state.editBlog"></i>
    <i class="fa fa-trash fa-2x text-danger" aria-hidden="true" v-if="state.account.id == blogProp.creatorId" @click="deleteBlog"></i>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'Blog',
  props: {
    blogProp: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      editBlog: false
    })
    return {
      state,
      deleteBlog() {
        try {
          blogsService.deleteBlog(props.blogProp.id)
        } catch (error) {
          logger.error(error)
        }
      },
      editBlog(e) {
        logger.log('editing Blog', e.target.innerText)
        try {
          blogsService.editBlog(props.blogProp.id, e.target.innerText)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
