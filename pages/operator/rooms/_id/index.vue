<template>
  <div class="container text-white">
    <div v-if="room">
      <div class="row">
        <div class="col-4">
          <div class="d-grid gap-3">
            <div class="d-grid">
              <span class="alert alert-primary">
                <i class='bx bx-info-circle'></i>
                Hotel information
              </span>
              <RoomHotelInformation :hotel="room.hotel"/>
            </div>
            <div class="d-grid">
              <span class="alert alert-success">
                <i class='bx bx-trip'></i>
                Current Trip
              </span>
              <RoomCurrentTrip :trips="room.trips"/>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="d-grid gap-3">
            <div class="d-grid">
              <span class="alert alert-warning">
                <i class='bx bx-info-circle'></i>
                Room information
              </span>
              <RoomInformation :room="room" />
            </div>
            <div class="d-grid">
              <span class="alert alert-secondary">
                <i class='bx bx-history' ></i>
                Trips List
              </span>
              <RoomTrips :trips="room.trips" />
            </div>
          </div>
        </div>
      </div>
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
      this.$api.get('/operator/rooms/'+this.$route.params.id)
        .then(response => this.room=response.data)
    })
  },
  head(){
    return{
      title:'Room info'
    }
  }
}
</script>

<style scoped>

</style>
