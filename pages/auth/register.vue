<template>
  <div class="container text-light">
    <div class="row justify-content-center" style="margin-top: 8%;">
      <RegisterMessage v-if="userRegistered"/>
      <RegisterForm @registered="registered" v-else/>
    </div>
  </div>
</template>
<script>
export default {
  auth:'guest',
  layout:'empty',
  data(){
    return {
      userRegistered:false
    }
  },
  methods:{
    registered(){
      this.userRegistered=true
    }
  }
}
</script>
