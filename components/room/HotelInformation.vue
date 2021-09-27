<template>
  <div class="border border-primary rounded">
    <div class="d-grid gap-2 m-4">
        <span>
          {{hotel.name}}
        </span>
      <span>
          <i class='bx bxs-location-plus'></i>
          {{ hotel.address }}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props:['hotel']
}
</script>
