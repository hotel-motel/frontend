<template>
  <div class="grid gap-3">
    <div class="d-flex justify-content-center mt-1 mb-1" v-if="is_loading">
      <div class="spinner-border" role="status"></div>
    </div>
    <table class="table table-hover table-dark" v-else-if="trips.length>0">
      <thead>
      <tr>
        <th scope="col"> </th>
        <th scope="col">Start date</th>
        <th scope="col">End data</th>
        <th scope="col">City</th>
        <th scope="col">Hotel</th>
        <th scope="col"> </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(trip, index) in trips">
        <td>{{ index+1 }}</td>
        <td>{{ trip.start }}</td>
        <td>{{ trip.end }}</td>
        <td>
          <nuxt-link :to="'/cities/'+trip.room.hotel.city.name">
            {{ trip.room.hotel.city.name }}
          </nuxt-link>
        </td>
        <td>
          <nuxt-link :to="'/hotels/'+trip.room.hotel.id">
            {{ trip.room.hotel.name }}
          </nuxt-link>
        </td>
        <td>
          <nuxt-link class="btn btn-warning" :to="'/trips/'+trip.id">
            Details
          </nuxt-link>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mt-2 mb-2" v-else>
      <h1 class="font-bold">
        You don't have Trip
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  layout:'dashboard',
  data(){
    return{
      trips:[],
      is_loading:true
    }
  },
  mounted() {
    this.$api.get('/trips')
      .then(response=>this.trips=response.data)
      .finally(()=>{ this.is_loading=false })
  },
  head(){
    return{
      title:'Trips'
    }
  }
}
</script>
