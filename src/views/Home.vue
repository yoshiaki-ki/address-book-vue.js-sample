<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 mt-5>
      <v-btn color="info" @click='login'>Googleアカウントでログイン</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
