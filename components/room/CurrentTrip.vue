<template>
  <div class="border border-success rounded">
    <div class="d-grid gap-2 m-4" v-if="trip">
      <span>
        <i class='bx bx-down-arrow-alt'></i>
        Arrive : {{  trip.start }}
      </span>
      <span>
        <i class='bx bx-up-arrow-alt'></i>
        Leave : {{  trip.end }}
      </span>
      <div>
        <a href="#passengersCurrentTrip">
          <div class="alert alert-info" data-bs-toggle="collapse" href="'#passengersCurrentTrip"  aria-expanded="false" aria-controls="passengersCurrentTrip">
            <i class='bx bxs-group'></i>
            Passengers list
          </div>
        </a>
        <div class="collapse" id="passengersCurrentTrip">
          <div class="d-grid gap-2">
            <div class="alert alert-primary d-grid gap-1" v-for="passenger in trip.passengers">
              <span>
                First name : {{ passenger.first_name }}
              </span>
              <span>
                Last name : {{ passenger.last_name }}
              </span>
              <span>
                National code : {{ passenger.national_code }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="roomIsEmpty">
      <div class="d-flex justify-content-center mt-3 mb-3">
        Room is empty
      </div>
    </div>
  </div>
</template>

<script>
let moment = require('moment');
export default {
  props:['trips'],
  data(){
    return{
      trip:null,
      roomIsEmpty:false
    }
  },
  mounted() {
    for (let tr of this.trips){
      if (this.isActiveTrip(tr)){
        this.trip=tr
        break
      }
    }
    if ( ! this.trip){
      this.roomIsEmpty=true
    }
  },
  methods:{
    isActiveTrip(trip){
      return moment().isBetween(trip.start, trip.end)
    }
  }
}
</script>
