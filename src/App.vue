<template>
<v-app>
  <v-toolbar app>
    <v-toolbar-side-icon v-show="$store.state.login_user" @click='toggleSideMenu'></v-toolbar-side-icon>
    <v-toolbar-title class="headline text-uppercase">
      <span>マイアドレス帳</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="$store.state.login_user">
      <v-btn @click="logout">ログアウト</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <SideNav />

  <v-content>
    <router-view />
  </v-content>
</v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
import firebase from 'firebase'

export default {
  name: 'App',
  components: {
    SideNav
  },
  created() {
    //do something after creating vue instance
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setLoginUser(user)
        if(this.$router.currentRoute.name === 'home') this.$router.push({name: 'addresses' })
      }else{
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  data() {
    return {
      //
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser','deleteLoginUser','logout'])
  }
}
</script>
