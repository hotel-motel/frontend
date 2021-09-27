<template>
  <div class="container text-light">
    <div v-if="trip">
      <div class="d-grid gap-3 mt-4 mb-4">
        <TripInformation :trip="trip" />
        <TripPassengers :passengers="trip.passengers" />
        <TripPayment :trip="trip" />
        <TripRoom :room="trip.room" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      trip:null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.get('/trips/'+this.$route.params.id)
        .then(response=>this.trip=response.data)
    })
  }
}
</script>

<style scoped>

</style>
