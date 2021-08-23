<template>
  <div>
    <nuxt-link class="text-gray-900" :to="'/cities/'+name">
      <div class="imageContainer rounded" v-bind:style="{ 'background-image': 'url(' + image + ')'}" @mouseenter="mouseEntered()" @mouseleave="mouseLeft()">
        <div class="content fs-5 text-center">
          <button class="btn btn-dark" v-bind:style="{display:mouseOnItem}">
            {{ name }}
          </button>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default{
  props:['name', 'image'],
  data(){
    return{
      mouseOnItem:'none'
    }
  },
  methods:{
    mouseEntered(){
      this.mouseOnItem=''
    },
    mouseLeft(){
      this.mouseOnItem='none'
    }
  }
}
</script>
<style scoped>
.imageContainer {
  width:100%;
  height: 200px;
  background-size: 100% 100%;
}
.content{
  padding-top: 30%;
}
</style>
