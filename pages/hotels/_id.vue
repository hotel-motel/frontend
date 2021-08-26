<template>
  <div class="container">
    <span class="text-light">
      Room info
    </span>
    <search-room :hotel_id="hotel.id" v-if="hotel"></search-room>
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
  }
}
</script>

<style scoped>

</style>
