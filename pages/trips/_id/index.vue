<template>
  <div class="container text-light">
    <div v-if="trip">
      <div class="grid gap-7 mt-4 mb-4">
        <trip-information :trip="trip"></trip-information>
        <trip-passengers :passengers="trip.passengers"></trip-passengers>
        <trip-room :room="trip.room"></trip-room>
        <trip-payment :trip="trip"></trip-payment>
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
