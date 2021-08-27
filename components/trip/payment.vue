<template>
  <div class="grid gap-2">
    <span class="h4">
        <div class="badge badge-primary">
            Payment Info
        </div>
    </span>
    <div>
      <i class='bx bxs-calendar bx-sm'></i>
      <span class="h5">
            Date : {{ trip.payment.created_at }}
        </span>
    </div>
    <div>
      <i class='bx bxs-time bx-sm'></i>
      <span class="h5">
            Time : {{ trip.payment.created_at }}
        </span>
    </div>
    <div>
      <i class='bx bx-money bx-sm'></i>
      <span class="h5">
            Amount : {{ trip.amount }}
            <span class="badge badge-warning">
                Tooman
            </span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props:['trip']
}
</script>
