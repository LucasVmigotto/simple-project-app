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
          <span class="headline">{{ message }}</span>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    message: 'Hello, world!'
  }),
  created () {},
  computed: {},
  mounted: {},
  methods: {},
  watch: {},
  components: {}
}
</script>
<style lang="stylus" src="./assets/global.styl"></style>
<style lang="stylus" scopped>
.message
  height: 350px
</style>
