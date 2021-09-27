<template>
  <div class="d-grid gap-3 container">
    <span class="h3 text-light">
      Your hotels :
    </span>
    <div class="row justify-around">
      <div class="col-3 text-light" v-for="hotel in hotels">
        <Hotel :hotel="hotel"></Hotel>
        <div>
          <nuxt-link class="btn btn-success mb-3 panel-btn" :to="'hotels/'+hotel.id">Hotel Panel</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'operator',
  data(){
    return{
      hotels:null
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.get('/operator/hotels')
        .then(response => this.hotels=response.data)
    })
  },
  head(){
    return{
      title:'Operator Dashboard'
    }
  }
}
</script>

<style scoped>
.panel-btn{
  width: 100%;
}
</style>
