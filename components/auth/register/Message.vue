<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">One more step required</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Your account created!
        Now you need to verify your email by click on link on email which we sent to your email.
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <nuxt-link to="/auth/login" type="button" class="btn btn-primary btn-lg px-4 gap-3">Login</nuxt-link>
        <nuxt-link type="button" to="/" class="btn btn-outline-secondary btn-lg px-4">Home</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
