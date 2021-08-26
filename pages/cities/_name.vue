<template>
  <div class="container">
    <div class="row">
      <div class="col-3 text-light" v-for="hotel in hotels">
        <Hotel :hotel="hotel"></Hotel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth:false,
  props:['city_name'],
  data(){
    return{
      hotels:null,
      last_page:1,
      is_loading:true,
      current_page:1
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.sendRequest(1)
    })
  },
  methods:{
    loadData(response, page){
      this.hotels=response.data.data
      this.last_page=response.data.last_page
      this.current_page=page
    },
    changePage(page){
      if (this.current_page===page)
        return;
      this.hotels=null
      this.sendRequest(page)
    },
    sendRequest(page){
      this.is_loading=true
      this.$api.get('/cities/'+this.$route.params.name+'/hotels?page='+page)
        .then(response=>{
          this.loadData(response, page)
        })
        .finally(()=>{
          this.is_loading=false
        })
    }
  }
}
</script>
