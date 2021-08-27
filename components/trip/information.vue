<template>
  <div class="bg-secondary overflow-hidden shadow-sm rounded text-light mb-3">
    <div class="p-6 bg-secondary border-b">
      <div class="d-flex justify-content-around m-3">
        <div>
              <span class="h5">
                <i class='bx bx-down-arrow-alt'></i>
                Arrive :
              </span>
          {{ trip.start }}
        </div>
        <div>
              <span class="h5">
                <i class='bx bx-up-arrow-alt'></i>
                Leave :
              </span>
          {{ trip.end }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['trip']
}
</script>

