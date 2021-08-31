<template>
  <form class="col-5 text-center d-grid gap-4 align-middle" @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)">
    Logo
    <div class="row">
      <div class="col text-start">
        <i class='bx bxs-user bx-sm'></i>
        Name
      </div>
    </div>
    <input class="form-control" type="text" name="name" v-model="form.name">
    <FormErrorMessage :form="form" :name="'name'" v-if="form.errors.has('name')" />
    <div class="row">
      <div class="col text-start">
        <i class='bx bxs-envelope bx-sm' ></i>
        Email
      </div>
    </div>
    <input class="form-control" type="email" name="email" v-model="form.email">
    <FormErrorMessage :form="form" :name="'email'" v-if="form.errors.has('email')" />
    <div class="row">
      <div class="col text-start">
        <i class='bx bxs-lock bx-sm' ></i>
        Password
      </div>
    </div>
    <input class="form-control" type="password" name="password" v-model="form.password">
    <FormErrorMessage :form="form" :name="'password'" v-if="form.errors.has('password')" />
    <input type="submit" name="send" class="btn btn-warning" :disabled="form.errors.any()" value="Register" v-if=" ! form.isSending" />
    <button class="btn btn-warning" type="button" disabled v-else>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span class="visually-hidden">Loading...</span>
    </button>
    <div class="row">
      <div class="col text-end">
        <NuxtLink  class="btn btn-outline-light" to="/auth/login">
          login
        </NuxtLink>
      </div>
      <div class="col text-start">
        <NuxtLink class="btn btn-outline-light" to="/auth/reset-password">
          reset password
        </NuxtLink>
      </div>
    </div>
  </form>
</template>

<script>
import Form from '~/helpers/form/form.js';
import { required, numeric, minLength, maxLength, email } from 'vuelidate/lib/validators';
export default {
  data(){
    return {
      form:new Form({
        name:'Omidddd',
        email:'o@m.com',
        password:'123456789'
      })
    };
  },
  validations:{
    form:{
      name:{
        required,
      },
      password:{
        required,
        minLength:minLength(6),
        maxLength:maxLength(255)
      },
      email:{
        required,
        email
      }
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, 'auth/register')
          .then(data=>this.$emit('registered'));
      }else{
        this.form.parseError({
          'name':{
            'required':'Enter name'
          },
          'email':{
            'required':'Enter email address',
            'email':'Enter valida email address'
          },
          'password':{
            'required':'Enter password',
            'minLength':'Password should be at least 6 character',
            'maxLength':'Password should not be more than 255 character'
          }
        }, this.$v);
      }
    }
  }
}
</script>
