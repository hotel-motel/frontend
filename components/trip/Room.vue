<template>
  <div>
    <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-primary">
      Room and hotel information
    </h6>
    <div class="col-xxl-12 px-4 py-5 text-light">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5 border border-light rounded">
        <div class="col-10 col-sm-8 col-lg-6">
          <img :src="room.hotel.image" class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-dark">
            Room info
          </h6>
          <p class="lead">
            Number :
            {{ room.number }}
          </p>
          <p class="lead">
            Capacity :
            {{ room.max_capacity }}
          </p>
          <p class="lead">
            Price :
            {{ room.price }}
            <span class="badge badge-warning text-warning">
                Tooman
            </span>
            (per day)
          </p>
          <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-dark">
            Hotel info
          </h6>
          <p class="lead">
            Name :
            {{ room.hotel.name }}
          </p>
          <p class="lead">
            <i class='bx bxs-location-plus'></i>
            Address :
            {{ room.hotel.city.name }},
            {{ room.hotel.address }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['room']
}
</script>
