<template>
  <div class="container text-light">
    <div class="row justify-content-center" style="margin-top: 19%;">
      <ResetPasswordForm
        v-if="state==states.INITIAL"
        @notified="codeNotified"
      ></ResetPasswordForm>
      <ResetPasswordTokenForm
        v-if="state==states.NOTIFIED"
        @codeVerified="codeVerified"
      />
      <ResetPasswordNewPasswordForm
        v-if="state==states.VERIFIED"
        :token="token"
        @passwordReseted="passwordReseted"
      />
      <ResetPasswordMessage
        v-if="state==states.RESETED"
      />
    </div>
  </div>
</template>

<script>
const states={
  INITIAL:"initial",
  RESETED:"reseted",
  NOTIFIED:"notified",
  VERIFIED:"verified"
};
export default {
  auth:'guest',
  layout:'empty',
  data(){
    return{
      token:'',
      states:states,
      state:states.INITIAL
    }
  },
  methods:{
    codeNotified(){
      this.state=this.states.NOTIFIED;
    },
    codeVerified(token){
      this.token=token;
      this.state=this.states.VERIFIED;
    },
    passwordReseted(){
      this.state=this.states.RESETED;
    }
  },
  head(){
    return{
      title:'Reset password'
    }
  }
};
</script>
