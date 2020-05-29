<template lang="pug">
  transition(name="move")
    .container
        .content.hast-text-centered
            h1 Loading...
</template>

<script>
    export default {
        name: "Loader.vue"
    }
</script>

<style lang="scss" scoped>
  .content{
    padding: 20px;
    min-height: 40vh;
  }
</style>
