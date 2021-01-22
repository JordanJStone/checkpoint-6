<template>
  <div class="col-4 text-center">
    <router-link :to="{name: 'CurrentBlog', params: {id: blogProp.id}}">
      <h2>Title: {{ blogProp.title }}</h2>
      <h4>Author: {{ blogProp.creator.name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    blogProp: { type: Object, required: true }
  },
  setup(props) {

  }
}
</script>

<style lang="scss" scoped>

</style>
