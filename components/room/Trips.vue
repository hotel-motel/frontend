<template>
  <div>
    <div class="d-grid gap-2">
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
          </div>
        </a>
        <div class="collapse" :id="'trip'+trip.id">
          <div class="align-items-center border border-light rounded">
            <div class="d-grid gap-2 m-3">
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
  </div>
</template>

<script>
export default {
  props:['trips']
}
</script>
