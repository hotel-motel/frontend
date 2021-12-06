<template>
  <div class="d-grid gap-2">
    <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-primary">
      Payment
    </h6>
    <div class="row flex-lg-row-reverse px-4 py-3 align-items-center g-1 border border-light rounded">
      <div class="d-flex flex-row justify-content-around">
        <div>
          <i class='bx bxs-calendar bx-sm'></i>
          <span class="h5 bx-sm">
                {{ trip.payment.created_at.substr(0,10) }}
            </span>
        </div>
        <div>
          <i class='bx bxs-time bx-sm'></i>
          <span class="h5 bx-sm">
                {{ trip.payment.created_at.substr(11,8) }}
            </span>
        </div>
        <div>
          <i class='bx bx-dollar bx-sm'></i>
          <span class="h5 bx-sm">
                {{ trip.amount }}
                <span class="text-warning">
                    Tooman
                </span>
            </span>
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
