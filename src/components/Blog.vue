<template>
  <div class="col-4">
    <router-link :to="{name: 'currentBlog', params: {id: blogProp.id}}">
      <h3>{{ blogProp.name }}</h3>
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
