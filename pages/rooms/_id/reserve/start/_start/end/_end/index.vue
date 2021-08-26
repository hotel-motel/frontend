<template>
  <div class="container">
    <div v-if="room">
      <div class="container col-xxl-8 px-4 py-5 text-light">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 border border-light rounded">
          <div class="col-10 col-sm-8 col-lg-6">
            <img :src="room.hotel.image" class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-primary">
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
            <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-primary">
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
      <div class="bg-secondary overflow-hidden shadow-sm rounded text-light mb-3">
        <div class="p-6 bg-secondary border-b">
          <div class="d-flex justify-content-around m-3">
            <div>
              <span class="h5">
                <i class='bx bx-down-arrow-alt'></i>
                Arrive :
              </span>
              {{ this.$route.params.start }}
            </div>
            <div>
              <span class="h5">
                <i class='bx bx-up-arrow-alt'></i>
                Leave :
              </span>
              {{ this.$route.params.end }}
            </div>
          </div>
        </div>
      </div>
      <passengers-form :capacity="room.max_capacity" :room_id="room.id"></passengers-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      room:null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.post('/rooms/'+this.$route.params.id, {
        start:this.$route.params.start,
        end:this.$route.params.end
      })
      .then(response=>this.room=response.data)
    })
  }
}
</script>
