<template lang="html">
  <form>
    <div class="row">
      <div class="col">
        <label>Username</label>
        <input type="text" v-model="username">
      </div>
      <div class="col">
        <label>Password</label>
        <input type="password" v-model="password">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" @click="logUserIn(username, password)">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script>
import { logUserIn } from '@/actions/user-authorization';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    logUserIn (username, password) {
      logUserIn(username, password);
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    width: 75%;
    margin: 0 auto;
  }
</style>
