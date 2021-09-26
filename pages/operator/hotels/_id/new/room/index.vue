<template>
  <div class="text-light container">
    <div class="d-flex justify-content-center mt-1 mb-1" v-if="form.isSending">
      <div class="spinner-border" role="status"></div>
    </div>
    <form  @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)" v-else-if="changed===false">
      <div class="d-grid gap-3">
        <div class="d-grid gap-2">
          <span>
            Number :
          </span>
          <input type="text" name="number" class="form-control" v-model="form.number">
          <FormErrorMessage :form="form" name="number" v-if="form.errors.has('number')" />
        </div>
        <div class="d-grid gap-2">
          <span>
            Price :
          </span>
          <input type="number" name="price" class="form-control" v-model="form.price">
          <FormErrorMessage :form="form" name="price" v-if="form.errors.has('price')" />
        </div>
        <div class="d-grid gap-2">
          <span>
            Floor :
          </span>
          <input type="number" name="floor" class="form-control" v-model="form.floor">
          <FormErrorMessage :form="form" name="floor" v-if="form.errors.has('floor')" />
        </div>
        <div class="d-grid gap-2">
          <span>
            Capacity :
          </span>
          <input type="number" name="capacity" class="form-control" v-model="form.capacity">
          <FormErrorMessage :form="form" name="capacity" v-if="form.errors.has('capacity')" />
        </div>
        <div class="d-grid">
          <input type="submit" class="btn btn-primary" value="Create" v-if=" ! form.isSending">
          <button class="btn btn-primary" type="button" disabled v-else>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
          </button>
        </div>
      </div>
    </form>
    <div v-else>
      <div class="alert alert-success d-flex justify-content-between">
        <span>
          Room Added
        </span>
        <nuxt-link class="btn btn-warning" :to="'/operator/hotels/'+$route.params.id+'/rooms/'+room.id">
          Room Detail
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import Form from '~/helpers/form/form.js'
import {required} from 'vuelidate/lib/validators'
export default {
  data(){
    return {
      form:new Form({
        number:0,
        price:0,
        floor:0,
        capacity:0
      }),
      changed:false,
      room:null
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, '/operator/hotels/'+this.$route.params.id+'/rooms')
          .then(response=>{
            this.changed=true
            this.room=response
          })
      }else{
        this.form.parseError({
          'number':{
            'required':'Enter number.',
          },
          'price':{
            'required':'Enter price.'
          },
          'floor':{
            'required':'Enter floor.'
          },
          'capacity':{
            'required':'Enter capacity.'
          }
        }, this.$v);
      }
    }
  },
  validations:{
    form:{
      number:{
        required
      },
      price:{
        required
      },
      floor:{
        required
      },
      capacity:{
        required
      }
    }
  }
}
</script>
