<template lang="pug">
  .main
    pm-notification(v-show="showNotification" :notificationType="successfulSearch")
        p(slot="body" v-if="successfulSearch") {{this.tracks.length}} results found
        p(slot="body" v-else) No songs found
    transition(name="move")
      pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Find song", v-model="searchQuery", @keyup.enter="search")
          .container.buttons.pv-1
            a.button.is-info.is-large.is-rounded(@click="search") Find
            a.button.is-danger.is-large.is-rounded &times;
          p()
            //small {{searchMessage}}
            //small {{track}}

      .container.results
            .columns.is-multiline
                .column.is-one-quarter(v-for="t in tracks")
                    pm-track(v-blur="t.preview_url", :track="t",  :class= `t.id===track.id?'is-active' : 'none'` )

</template>

<script>
  import trackService from "@/services/track";
  import pmFooter from "@/components/layout/Footer.vue";
  import pmHeader from "@/components/layout/Header.vue";
  import  pmTrack from "@/components/Track.vue"
  import pmLoader from "@/components/shared/Loader.vue"
  import  pmNotification from "@/components/shared/Notification.vue"

  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'app',
    components: {
      pmTrack,
      pmLoader,
      pmNotification
    },
    data() {
      return {
        searchQuery: '',
        tracks: [],
        isLoading: false,
        //selectedTrack: null,
        showNotification: false,
        successfulSearch: false,
      }
    },
    computed: {
      ...mapState(['track']),
      //...mapMutations(['setTrack']),
      searchMessage() {
        return `Found: ${this.tracks.length}  ${this.searchQuery}`
      }
    },
    watch:{
      showNotification(){
        if (this.showNotification){
          setTimeout(()=> {
            this.showNotification= false
          }, 2000)
        }
      }

    },
    methods: {
      search() {
        if(!this.searchQuery){return }

        this.isLoading = true
        trackService.search(this.searchQuery).then(res => {
          console.log(res)
          this.successfulSearch = res.tracks.total!==0
          this.showNotification=true
          this.tracks = res.tracks.items
          this.isLoading =false
        })
      }

    }
  }
</script>

<style lang="scss">
    .pv-1{
      padding: 1em 0;
    }
  .is-active {
    border: 3px #48c774 solid;
  }
  main{
    position: relative;

  }
</style>
