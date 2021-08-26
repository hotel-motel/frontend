<template>
  <div>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8" v-if="typeof errors=='string'">
      <div class="alert alert-danger">
        {{ errors }}
      </div>
    </div>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 d-flex justify-content-end">
      <Button class="btn btn-primary" @click="addPassengerField" v-if="passengers.length<capacity">
        <i class='bx bx-plus'></i>
        new passenger
      </Button>
      <Button class="btn btn-danger" v-else disabled>
        Room capacity is full
      </Button>
    </div>
    <div class="py-12">
      <div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 grid gap-2">
          <div class="d-grid gap-3">
            <div>
              <span class="h4 text-light" v-if="passengers.length>0">
                <i class='bx bxs-calendar' ></i>
                Passengers list :
              </span>
            </div>
            <div class="bg-secondary overflow-hidden shadow-sm rounded" v-for="(passenger, index) in passengers">
              <div class="d-flex justify-content-center mt-1 mb-1" v-if="is_loading">
                <div class="spinner-border" role="status"></div>
              </div>
              <div class="p-6 bg-secondary" v-else>
                <div class="d-flex justify-content-around m-3 text-light">
                  <div>
                    <span class="btn btn-warning" disabled="disabled">
                      {{ index+1 }}
                    </span>
                  </div>
                  <div class="d-grid gap-2">
                    <div>
                      <span class="h5">
                        First name :
                      </span>
                      <input class="form-control" type="text" v-model="passenger.first_name" required>
                    </div>
                    <div class="alert alert-danger" v-if="errors['passengers.'+[index]+'.first_name']!==undefined">
                      {{ errors['passengers.'+[index]+'.first_name'][0] }}
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <div>
                      <span class="h5">
                        Last name :
                      </span>
                      <input class="form-control" type="text" v-model="passenger.last_name" required>
                    </div>
                    <div class="alert alert-danger" v-if="errors['passengers.'+[index]+'.last_name']!==undefined">
                      {{ errors['passengers.'+[index]+'.last_name'][0] }}
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <div>
                      <span class="h5">
                        National code :
                      </span>
                      <input class="form-control" type="text" v-model="passenger.national_code" required>
                    </div>
                    <div class="alert alert-danger" v-if="errors['passengers.'+[index]+'.national_code']!==undefined">
                      {{ errors['passengers.'+[index]+'.national_code'][0] }}
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-danger" @click="removePassenger(index)">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-1">
              <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 d-grid gap-2" v-if="passengers.length>0">
                <Button class="btn btn-success" @click="checkForm()"  :disabled="is_loading">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
export default{
  props:['capacity', 'room_id'],
  data(){
    return {
      is_loading:false,
      passengers:[],
      errors: {}
    }
  },
  methods:{
    addPassengerField(){
      this.passengers.push({'first_name':'', 'last_name':'', 'national_code':''})
    },
    removePassenger(index){
      this.passengers.splice(index, 1)
    },
    checkForm(){
      //TODO: show error of vuelidate
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      this.errors={}
      this.is_loading=true
      const urlParams = new URLSearchParams(window.location.search);
      // Note : we make is_loading false in catch only because we need stil loading while redirection to payment page
      this.$api.post('/rooms/'+this.room_id+'/trips', {
        passengers:this.passengers,
        start:this.$route.params.start,
        end:this.$route.params.end
      })
        .then(response=> {window.location.href='http://127.0.0.1:8000/trips/'+response.data+'/pay'})
        .catch(error=> {
          this.errors = error.response.data.errors
          this.is_loading=false
        })
    }
  },
  validations:{
    passengers:{
      required,
      $each:{
        first_name:{
          required
        },
        last_name:{
          required
        },
        national_code:{
          required,
          minLength:minLength(10),
          maxLength:maxLength(10)
        }
      }
    }
  }
}
</script>
