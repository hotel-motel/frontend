<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img class="rounded" src="/logo.jpg" height="100" width="100"/>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/dashboard" class="nav-link px-2 text-light">Dashboard</a></li>
          <li><a href="/cities" class="nav-link px-2 text-light">Explore</a></li>
          <li><a href="/about" class="nav-link px-2 text-white">About</a></li>
        </ul>
        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            <span v-if="user.hasRole('operator')" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              operator
            </span>
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <div v-if="user.hasRole('operator')">
              <li><nuxt-link to="/operator" class="dropdown-item">Operator dashboard</nuxt-link></li>
              <li><nuxt-link to="/dashboard" class="dropdown-item">Customer Dashboard</nuxt-link></li>
            </div>
            <li v-else><nuxt-link to="/dashboard" class="dropdown-item">Dashboard</nuxt-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="logout">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import User from '~/helpers/user/user.js'
export default {
  data(){
    return{
      user:new User(this.$auth)
    }
  },
  methods:{
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
