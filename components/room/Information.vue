<template>
  <div class="align-items-center border border-warning rounded">
    <div class="d-grid gap-2 m-4">
        <span>
          Number :
          {{room.number}}
        </span>
      <span>
          Capacity :
          {{room.max_capacity}}
        </span>
      <span>
          Price :
          {{room.price}}
          <span class="badge badge-warning text-warning">
            Tooman
          </span>
           (per day)
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props:['room']
}
</script>
