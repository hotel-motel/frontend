<template>
  <div class="text-light container">
    <div v-if="room">
      <div class="d-flex justify-content-center mt-1 mb-1" v-if="form.isSending">
        <div class="spinner-border" role="status"></div>
      </div>
      <form  @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)" v-else>
        <div class="d-grid gap-3">
          <div class="d-grid gap-2">
          <span>
            Price :
          </span>
            <input type="number" name="price" class="form-control" v-model="form.price">
            <FormErrorMessage :form="form" name="price" v-if="form.errors.has('price')" />
          </div>
          <div class="d-grid gap-2">
          <span>
            Capacity :
          </span>
            <input type="number" name="capacity" class="form-control" v-model="form.capacity">
            <FormErrorMessage :form="form" name="capacity" v-if="form.errors.has('capacity')" />
          </div>
          <div class="d-grid">
            <input type="submit" class="btn btn-primary" value="Edit" v-if=" ! form.isSending">
            <button class="btn btn-primary" type="button" disabled v-else>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span class="visually-hidden">Loading...</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Form from '~/helpers/form/form.js'
import {required} from 'vuelidate/lib/validators'
export default {
  data(){
    return {
      room:null,
      form:new Form({
        price:0,
        capacity:0
      })
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, '/operator/rooms/'+this.$route.params.id+'/edit')
          .then(response=>{
            this.$router.push('/operator/rooms/'+this.$route.params.id)
          })
      }else{
        this.form.parseError({
          'price':{
            'required':'Enter price.'
          },
          'capacity':{
            'required':'Enter capacity.'
          }
        }, this.$v);
      }
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.$api.get('/operator/rooms/'+this.$route.params.id)
        .then(response => {
          this.room=response.data
          this.form.capacity=this.room.max_capacity
          this.form.price=this.room.price
        })
    })
  },
  validations:{
    form:{
      price:{
        required
      },
      capacity:{
        required
      }
    }
  }
}
</script>
