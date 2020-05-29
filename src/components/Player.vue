<template lang="pug">
    .content(v-if="track && track.album")
      p.is-128x128
        img( :src="track.album.images[0].url")
      p
        strong {{track.name}}
        small [{{track.duration_ms | ms-to-min}}]
      p
        audio(controls, :src="track.preview_url")
</template>

<script>
  import {mapState} from 'vuex'

    export default {
        name: "Player.vue",
        computed: {
          ...mapState(['track'])
        }
    }
</script>

<style scoped lang="scss">
  img {
    width: 128px;
    border-radius: 50%;
  }
</style>
