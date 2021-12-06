<template>
  <div>
    <div class="container my-5 bg-light rounded">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1">Reserve Hotel</h1>
          <p class="lead">anywhere you want! You can explore in hotels in iran cities and reserve hotel easily.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <nuxt-link type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" to="/cities">
              Explore
            </nuxt-link>
          </div>
        </div>
        <div class="col-lg-5 p-0 overflow-hidden shadow-lg">
          <img class="rounded" src="/index/card-image-1.jpg" width="720">
        </div>
      </div>
    </div>
    <div class="container text-dark rounded bg-light">
      <div class="row top mb-3">
        <div class="col-11 mt-3 h3">
          Popular cities
        </div>
        <div class="col-1 mt-3">
          <nuxt-link class="btn btn-outline-dark" :to="'/cities'">
            show all
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col" v-for="city in cities">
          <City :name="city.name" :image="city.image"></City>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  auth:false,
  data(){
    return{
      cities:[
        {
          name:'Tehran',
          image:'https://unsplash.com/photos/kVACg-kVKA0/download?force=true&w=640',
        },
        {
          name:'Mashhad',
          image:'https://unsplash.com/photos/jDgZrAPV_cI/download?force=true&w=640',
        },
        {
          name:'Tabriz',
          image:'https://unsplash.com/photos/6jBKmH4klU8/download?force=true&w=640',
        },
        {
          name:'Shiraz',
          image:'https://unsplash.com/photos/kmjH-aZnzYU/download?force=true&w=640',
        }
      ]
    };
  },
  head(){
    return{
      title:'Home'
    }
  }
};
</script>
