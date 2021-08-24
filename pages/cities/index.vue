<template>
  <div class="grid gap-3 container">
    <span class="h3 text-light">
      Cities
    </span>
    <div class="row justify-around">
      <div class="col-4 mt-2 mb-2" v-for="city in cities">
        <City :name="city.name" :image="city.image"></City>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth:false,
  data(){
    return{
      cities:[]
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.$get('/cities')
      .then(response=>this.cities=response)
    })
  }
}
</script>

<style scoped>

</style>
