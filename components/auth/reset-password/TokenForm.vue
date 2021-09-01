<template>
  <form class="col-5 text-center d-grid gap-4 align-middle" @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)">
    Logo
    <div class="row">
      <div class="col text-start">
        <i class='bx bx-text bx-sm'></i>
        Verification Code
      </div>
    </div>
    <input class="form-control" type="text" name="token" v-model="form.token">
    <FormErrorMessage :form="form" name="token" v-if="form.errors.has('token')" />
    <input type="submit" name="send" class="btn btn-warning" :disabled="form.errors.any()" value="verify code">
  </form>
</template>

<script>
import Form from '~/helpers/form/form.js';
import { required, minLength, numeric, maxLength } from 'vuelidate/lib/validators';
export default {
  data(){
    return {
      form:new Form({
        token:''
      })
    };
  },
  validations:{
    form:{
      token:{
        numeric,
        required,
        minLength:minLength(6),
        maxLength:maxLength(6)
      }
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, 'auth/password/reset/code/verify')
          .then(data=>this.$emit('codeVerified', this.form.token));
      }else{
        this.form.parseError({
          'token':{
            'required':'Enter code.',
            'numeric':'Code should be numeric.',
            'minLength':'Code should bt 6 digit.',
            'maxLength':'Code should bt 6 digit.'
          }
        }, this.$v);
      }
    }
  }
}
</script>
