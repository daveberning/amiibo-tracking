<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3" v-for="amiibo in $store.state.dashboard.amiibos">
        <div class="card">
          <div class="image-container">
            <img :src="amiibo.image" alt="">
          </div>
          <div class="amiibo-info">
            <p><strong>{{ amiibo.character }}</strong></p>
            <p><em>{{ amiibo.amiiboSeries }}</em></p>
          </div>
          <UserActions />
        </div>
      </div>
    </div>
    <button @click="logUserOut()">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { isUserLoggedIn, logUserOut } from '@/actions/user-authorization';
import { getAPI } from '@/actions/service-methods';
import UserActions from '@/components/UserActions';

export default {
  components: {
    UserActions
  },
  methods: {
    ...mapActions('dashboard', ['getAmiibos']),
    logUserOut () {
      logUserOut();
    },
  },
  mounted() {
    isUserLoggedIn();
    this.getAmiibos('amiibo/?gameseries=Super Mario');
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 2px;
}

.amiibo-info {
  margin: 15px 0;
  p { margin: 0; }
}

.image-container {
  display: inline;

  img {
    max-height: 200px;
    max-width: 200px;
    object-fit: cover;
  }
}
</style>
