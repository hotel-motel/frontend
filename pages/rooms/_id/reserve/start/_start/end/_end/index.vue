<template>
  <div class="container">
    <passengers-form :capacity="room.max_capacity" :room_id="room.id" v-if="room"></passengers-form>
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
      this.$api.post('/rooms/'+this.$route.params.id, {
        start:this.$route.params.start,
        end:this.$route.params.end
      })
      .then(response=>this.room=response.data)
    })
  }
}
</script>
