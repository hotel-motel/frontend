<template>
  <div>
    <HeaderMainAuthed v-if="$auth.loggedIn"/>
    <HeaderMain v-else/>
    <Nuxt />
  </div>
</template>
