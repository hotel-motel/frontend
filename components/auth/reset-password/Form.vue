<template>
  <form class="col-5 text-center d-grid gap-4 align-middle" @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)">
    Logo
    <div class="row">
      <div class="col text-start">
        <i class='bx bxs-phone bx-sm' ></i>
        Email
      </div>
    </div>
    <input class="form-control" type="email" name="email" v-model="form.email">
    <FormErrorMessage :form="form" name="email" v-if="form.errors.has('email')" />
    <input type="submit" name="send" class="btn btn-warning" :disabled="form.errors.any()" value="send code">
  </form>
</template>

<script>
import Form from '~/helpers/form/form.js';
import { required, email } from 'vuelidate/lib/validators';
export default {
  data(){
    return {
      form:new Form({
        email:''
      })
    };
  },
  validations:{
    form:{
      email:{
        email,
        required
      }
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, 'auth/password/reset')
          .then(data=>this.$emit('notified'))
      }else{
        this.form.parseError({
          'email':{
            'required':'Enter email.',
            'email':'Enter valid email.'
          }
        }, this.$v)
      }
    }
  }
}
</script>
