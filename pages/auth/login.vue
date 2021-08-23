<template>
  <div class="container text-light">
    <div class="row justify-content-center" style="margin-top: 19%;">
      <form class="col-5 text-center d-grid gap-4 align-middle" @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)">
        Logo
        <div class="row">
          <div class="col text-start">
            <i class='bx bxs-phone bx-sm'></i>
            Email
          </div>
        </div>
        <input class="form-control" type="text" name="email" v-model="form.email">
        <FormErrorMessage :form="form" :name="'email'" v-if="form.errors.has('email')"/>
        <div class="row">
          <div class="col text-start">
            <i class='bx bxs-lock bx-sm'></i>
            <span>
							Password
						</span>
          </div>
        </div>
        <input class="form-control" type="password" name="password" v-model="form.password">
        <FormErrorMessage :form="form" :name="'password'" v-if="form.errors.has('password')" />
        <input v-show=" ! form.isSending" type="submit" name="send" class="btn btn-warning" :disabled="form.errors.any()" value="login">
        <button v-show="form.isSending" class="btn btn-warning" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span class="visually-hidden">Loading...</span>
        </button>
        <div class="row">
          <div class="col text-end">
            <NuxtLink class="btn btn-outline-light" to="/auth/register">
              register
            </NuxtLink>
          </div>
          <div class="col text-start">
            <NuxtLink class="btn btn-outline-light" to="/auth/reset-password">
              Reset password
            </NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from '~/helpers/form/form.js';
import { required, numeric, minLength, maxLength, email } from 'vuelidate/lib/validators';
export default {
  auth:'guest',
  layout:'empty',
  data(){
    return {
      form:new Form({
        email:'',
        password:''
      })
    };
  },
  validations:{
    form:{
      email:{
        required,
        email
      },
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
        this.$auth.loginWith('laravelJWT', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        }).catch(error=>this.form.onFail(error.response.data.errors))
      }else{
        this.form.parseError({
          'email':{
            'required':'Enter email address',
            'email':'Enter valid email address'
          },
          'password':{
            'required':'Enter password',
            'minLength':'password should be at least 6 characters.',
            'maxLength':'password should not be more than 255 characters.'
          }
        }, this.$v);
      }
    }
  }
}
</script>
</script>

<style scoped>

</style>
