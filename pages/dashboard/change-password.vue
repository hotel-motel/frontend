<template>
  <div class="text-light">
    <div class="d-flex justify-content-center mt-1 mb-1" v-if="form.isSending">
      <div class="spinner-border" role="status"></div>
    </div>
    <form  @submit.prevent="submitForm" @keydown="form.errors.clear($event.target.name)" v-else-if="changed===false">
      <div class="d-grid gap-3">
        <div class="d-grid gap-2">
          <span>
            Old password :
          </span>
          <input type="password" name="old_password" class="form-control" v-model="form.old_password">
          <FormErrorMessage :form="form" name="old_password" v-if="form.errors.has('old_password')" />
        </div>
        <div class="d-grid gap-2">
          <span>
            New password :
          </span>
          <input type="password" name="new_password" class="form-control" v-model="form.new_password">
          <FormErrorMessage :form="form" name="new_password" v-if="form.errors.has('new_password')" />
        </div>
        <div class="d-grid gap-2">
          <span>
            New password again :
          </span>
          <input type="password" name="new_password_confirm" class="form-control" v-model="form.new_password_confirm">
          <FormErrorMessage :form="form" name="new_password_confirm" v-if="form.errors.has('new_password_confirm')" />
        </div>
        <div class="d-grid">
          <input type="submit" class="btn btn-primary" value="Change password" v-if=" ! form.isSending">
          <button class="btn btn-primary" type="button" disabled v-else>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
          </button>
        </div>
      </div>
    </form>
    <div v-else>
      <div class="alert alert-success">
        Password changed
      </div>
      <button class="btn btn-warning" @click="changed=false">
        Change again
      </button>
    </div>
  </div>
</template>

<script>
import Form from '~/helpers/form/form.js'
import {required, minLength, sameAs, not} from 'vuelidate/lib/validators'
export default {
  layout:'dashboard',
  data(){
    return {
      form:new Form({
        old_password:'',
        new_password:'',
        new_password_confirm:''
      }),
      changed:false
    }
  },
  methods:{
    submitForm(){
      if (this.form.validated(this.$v)){
        this.form.submit(this.$api, 'change/password')
        .then(response=>this.changed=true)
      }else{
        this.form.parseError({
          'old_password':{
            'required':'Enter old password.',
            'minLength':'Old password should be at least 6 character.'
          },
          'new_password':{
            'required':'Enter new password.',
            'minLength':'New password should be at least 6 character.',
            'not':'New password should not be your current password.'
          },
          'new_password_confirm':{
            'required':'Enter new password confirmation.',
            'minLength':'New password confirmation should be at least 6 character.',
            'sameAsNewPassword':'New password confirmation should be same as new password.'
          }
        }, this.$v);
      }
    }
  },
  validations:{
    form:{
      old_password:{
        required,
        minLength:minLength(6)
      },
      new_password:{
        required,
        minLength:minLength(6),
        not:not(sameAs('old_password'))
      },
      new_password_confirm:{
        required,
        minLength:minLength(6),
        sameAsNewPassword:sameAs('new_password')
      }
    }
  }
}
</script>
