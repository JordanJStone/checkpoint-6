<template>
  <div class="text-center">
    <router-link :to="{name: 'CurrentComments', params: {id: comment.id}}">
      <h2>Title: {{ blogProp.title }}</h2>
      <h4>Author: {{ blogProp.creator.name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    commentProp: { type: Object, required: true }
  },
  setup(props) {

  }
}
</script>

<style lang="scss" scoped>

</style>
