<template>
  <div>
    <div v-if="hotel">
      <div class="container col-xxl-9 px-4 py-5 text-light">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 border border-light rounded">
          <div class="col-10 col-sm-8 col-lg-6">
            <img :src="hotel.image" class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              {{ hotel.name }}
            </h1>
            <p class="lead text-warning">
              {{ hotel.star }}
              <i class='bx bxs-star'></i>
            </p>
            <p class="lead">
              <i class='bx bxs-location-plus'></i>
              {{ hotel.city.name }},
              {{ hotel.address }}
            </p>
          </div>
        </div>
      </div>
      <search-room class="container mb-3" :hotel_id="hotel.id"></search-room>
    </div>
  </div>
</template>

<script>
export default {
  auth:false,
  data(){
    return{
      hotel:null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.get('/hotels/'+this.$route.params.id)
      .then(response => this.hotel=response.data)
    })
  },
  head(){
    return{
      title:'Hotel'
    }
  }
}
</script>
