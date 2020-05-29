<template lang="pug">
    section.hero.is-success
        .hero-head
            .header.nav
                .container.level
                    .navbar-left.level-left
                        .nav-item
                            strong 🎼 Never stop the music
                    .navbar-right.level-right.navbar-menu
                        router-link.navbar-item(:to="{name: 'search'}") Search
                        router-link.navbar-item(to="about")   About us
        .hero-body
            .container.has.has-text-centered
                h1.title Platzi Music
                h2.subtitle Seek your favorite songs
                pm-player
</template>

<script>
  import pmPlayer from '@/components/Player.vue'
    export default {
        name: "Header.vue",
      components:{
          pmPlayer
      }
    }
</script>

<style scoped>

</style>
