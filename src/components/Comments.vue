<template>
  <div class="row">
    <!-- <router-link :to="{name: 'CurrentComments', params: {id: commentProp.id}}"> -->
    <h2 class="pt-4">
      {{ commentProp.body }}
    </h2>
    <!-- </router-link> -->
  </div>
  <div>
    <h4 class="pb-2">
      Author: {{ commentProp.creator.name }}
    </h4>
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
