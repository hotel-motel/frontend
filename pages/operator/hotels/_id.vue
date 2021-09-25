<template>
  <div style="color: white">

  </div>
</template>

<script>
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
  }
}
</script>
