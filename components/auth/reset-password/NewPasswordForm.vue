<template>
  <form class="col-5 text-center d-grid gap-4 align-middle" @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)">
    Logo
    <div class="row">
      <div class="col text-start">
        <i class='bx bxs-lock bx-sm' ></i>
        New password
      </div>
    </div>
    <input class="form-control" type="password" name="password" v-model="form.password">
    <FormErrorMessage :form="form" name="password" v-if="form.errors.has('password')" />
    <input type="submit" name="send" class="btn btn-warning" :disabled="form.errors.any()" value="change password">
  </form>
</template>

<script>
import Form from '~/helpers/form/form.js';
import { required, numeric, minLength, maxLength} from 'vuelidate/lib/validators';
export default {
  props:['token'],
  data(){
    return {
      form:new Form({
        token:this.token,
        password:''
      })
    };
  },
  validations:{
    form:{
      password:{
        required,
        minLength:minLength(6),
        maxLength:maxLength(255)
      }
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, 'auth/password/reset/password/update')
          .then(data=>this.$emit('passwordReseted'));
      }else{
        this.form.parseError({
          'password':{
            'required':'Enter new password.',
            'minLength':'New password should be at least 6 character.',
            'maxLength':'New password should not be more than 255 character.'
          }
        }, this.$v);
      }
    }
  }
}
</script>
