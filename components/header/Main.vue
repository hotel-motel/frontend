<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img class="rounded" src="/logo.jpg" height="100" width="100"/>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/cities" class="nav-link px-2 text-light">Explore</a></li>
          <li><a href="/about" class="nav-link px-2 text-white">About</a></li>
        </ul>
        <div class="text-end">
          <NuxtLink to="/auth/login" type="button" class="btn btn-outline-light me-2">Login</NuxtLink>
          <NuxtLink to="/auth/register" type="button" class="btn btn-warning">Register</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
