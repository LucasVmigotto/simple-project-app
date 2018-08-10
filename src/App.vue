<template>
  <v-container
    fluid>
    <v-layout row wrap
      justify-space-around>
      <v-flex xs6
        text-xs-center>
        <v-card
          color="primary"
          class="message">
          <span class="headline">{{ apiVersion }}</span>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  data: () => ({
    message: 'Hello, world!'
  }),
  async created () {
    this.getApiVersion()
  },
  computed: {
    ...mapState([
      'error',
      'showError',
      'loading',
      'apiVersion'
    ])
  },
  mounted: {},
  methods: {
    ...mapActions([
      'getApiVersion'
    ])
  },
  watch: {},
  components: {}
}
</script>
<style lang="stylus" src="./assets/global.styl"></style>
<style lang="stylus" scopped>
.message
  height: 350px
</style>
