<template>
  <NuxtLink :to="'/hotels/'+hotel.id">
    <img :src="hotel.image" :alt="hotel.name" class="imageContainer rounded">
    <div class="alert alert-primary d-flex justify-content-between mt-3">
      <span>
        {{ hotel.name }}
      </span>
      <span class="h-3">
        {{ hotel.star }}
        <i class='bx bxs-star'></i>
      </span>
    </div>
  </NuxtLink>
</template>
<script>
export default{
  props:['hotel'],
}
</script>
<style scoped>
.imageContainer {
  width:100%;
  height: 200px;
}
</style>
