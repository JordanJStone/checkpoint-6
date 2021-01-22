<template>
  <div class="row text-center">
    <router-link :to="{name: 'CurrentComments', params: {id: commentProp.id}}">
      <h2>• {{ commentProp.body }}</h2>
      <h4>Author: {{ commentProp.creator.name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    commentProp: { type: Object, required: true }
  },
  setup(props) {

  }
}
</script>

<style lang="scss" scoped>

</style>
