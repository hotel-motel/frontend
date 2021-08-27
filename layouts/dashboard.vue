<template>
  <div>
    <HeaderMainAuthed />
    <div>
      <div class="row d-flex justify-content-around">
        <div class="col-2 gap-2 d-flex flex-column">
          <NuxtLink class="btn btn-outline-secondary" to="/dashboard/personal-info">
            Personal info
          </NuxtLink>
          <NuxtLink class="btn btn-outline-secondary" to="/dashboard/trips">
            Trips
          </NuxtLink>
          <NuxtLink class="btn btn-outline-secondary" to="/dashboard/change-password">
            Change password
          </NuxtLink>
        </div>
        <div class="col-8">
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
