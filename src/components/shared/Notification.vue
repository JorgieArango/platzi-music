<template lang="pug">
  transition(name="fade" )
    .container
        .columns
            .column.is-5.is-offset-4
                .notification(:class="notificationType?'is-success' :'is-danger'")
                      slot(name ="body") Something wrong
</template>

<script>
    export default {
        name: "Notification.vue",

      props: {
        notificationType: {
          type: Boolean,
          required: true
        }
    },


  }
</script>

<style scoped lang="scss">
  .notification {
    margin: 10px;

  }
</style>
