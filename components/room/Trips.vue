<template>
  <div>
    <div class="d-grid gap-2" v-if="trips.length>0">
      <div v-for="trip in trips">
        <a :href="'#trip'+trip.id">
          <div class="alert alert-dark d-flex justify-content-between" data-bs-toggle="collapse" :href="'#trip'+trip.id"  aria-expanded="false" :aria-controls="'trip'+trip.id">
            <span>
              <i class='bx bx-down-arrow-alt'></i>
              Arrive : {{ trip.start }}
            </span>

            <span>
              <i class='bx bx-up-arrow-alt'></i>
              Leave : {{ trip.end }}
            </span>
            <div>
              <button class="badge rounded-pill" :class="getClassStatusOfTrip(trip)">
                {{ getStatusOfTrip(trip) }}
              </button>
            </div>
          </div>
        </a>
        <div class="collapse" :id="'trip'+trip.id">
          <div class="align-items-center border border-light rounded">
            <div class="d-grid gap-3 m-3">
              <span>
                Amount : {{ trip.amount }}
                <span class="badge badge-warning text-warning">
                  Tooman
                </span>
              </span>
              <div>
                <a :href="'#passengerTrip'+trip.id">
                  <div class="alert alert-info" data-bs-toggle="collapse" :href="'#passengerTrip'+trip.id"  aria-expanded="false" :aria-controls="'passengerTrip'+trip.id">
                    <i class='bx bxs-group'></i>
                    Passengers list
                  </div>
                </a>
                <div class="collapse" :id="'passengerTrip'+trip.id">
                  <div class="d-grid gap-2">
                    <div class="alert alert-primary d-flex justify-content-between" v-for="passenger in trip.passengers">
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
          </div>
        </div>
      </div>
    </div>
    <div class="border border-secondary rounded" v-else>
      <div class="m-4 d-flex justify-content-center">
        No trip
      </div>
    </div>
  </div>
</template>

<script>
let moment = require('moment');
export default {
  props:['trips'],
  methods:{
    getClassStatusOfTrip(trip){
      let cl='bg-success'
      switch (this.getStatusOfTrip(trip)){
        case 'Current trip':
          cl='bg-warning'
          break
        case 'Past trip':
          cl='bg-danger'
      }
      return cl
    },
    getStatusOfTrip(trip){
      let state='Future trip'
      if(moment().isBetween(trip.start, trip.end)){
        state='Current trip'
      }else if (moment().isAfter(trip.end)){
        state='Past trip'
      }
      return state
    }
  }
}
</script>
