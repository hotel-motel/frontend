<template>
  <div v-if="hotel" class="text-white">
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
    <div class="container">
      <div class="py-12" v-if="hotel.rooms!=null">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="grid gap-2">
            <div class="d-flex justify-content-between">
              <span class="h3">
                  <i class='bx bx-list-ul'></i>
                  Rooms list :
                </span>
              <nuxt-link :to="'/operator/hotels/'+hotel.id+'/new/room'" class="btn btn-success">
                <i class='bx bx-plus'></i>
                new Room
              </nuxt-link>
            </div>
            <table class="table table-hover table-dark">
              <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Capacity</th>
                <th scope="col">Floor</th>
                <th scope="col">Status</th>
                <th scope="col">Reserved Until</th>
                <th scope="col">Delete status</th>
                <th scope="col">Details</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="room in hotel.rooms">
                <th scope="row">{{ room.number }}</th>
                <td>{{ room.max_capacity }}</td>
                <td>{{ room.floor }}</td>
                <td>
                  <button disabled :class="hotel.reserved_rooms.includes(room.id)?'btn btn-danger':'btn btn-primary'">
                    {{ hotel.reserved_rooms.includes(room.id)?'Full':'Empty'}}
                  </button>
                </td>
                <td>
                  <div v-if="room.trips.length>0">
                    <div v-for="trip in room.trips">
                      <div class="text-warning"  v-if="isActiveTrip(trip)" disabled>
                        {{ trip.end }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button class="btn btn-danger" :to="'/operator/rooms/'+room.id" v-if="room.deleted_at" disabled>
                    deleted
                  </button>
                </td>
                <td>
                  <nuxt-link class="btn btn-outline-secondary" :to="'/operator/rooms/'+room.id">
                    Details
                  </nuxt-link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let moment = require('moment');
export default {
  middleware: 'operator',
  data(){
    return{
      hotel:null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.get('/operator/hotels/'+this.$route.params.id)
        .then(response => this.hotel=response.data)
    })
  },
  methods:{
    isActiveTrip(trip){
      return moment().isBetween(trip.start, trip.end)
    }
  },
  head(){
    return{
      title:'Hotel info'
    }
  }
}
</script>
