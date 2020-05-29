<template lang="pug">
#app
  pm-header.pm-header
  main
    transition(name="fade" , mode="out-in")
      router-view

  pm-footer.pm-footer

</template>

<script>

  import pmFooter from "@/components/layout/Footer.vue";
  import pmHeader from "@/components/layout/Header.vue";


  export default {
    name: 'app',
    components: {
      pmFooter,
      pmHeader
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .pm-header{
    //height: 30vh;
  }
  .pm-footer{
    //height: 10vh;
  }
  main{
    min-height: 50vh;
  }
</style>
