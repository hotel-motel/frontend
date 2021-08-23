export default function ({ $axios, $auth }, inject) {
  const api = $axios.create({})
  api.onRequest(config => {
    // Set auth token to request if user is authed
    if ($auth.loggedIn){
      api.defaults.headers.common['Authorization']=$auth.strategy.token.get()
    }
    window.$nuxt.$loading.start()
  })
  api.onResponse(response => {
    window.$nuxt.$loading.finish()
  })
  api.onError(error=>{
    window.$nuxt.$loading.finish()
  })
  api.setBaseURL('http://localhost:8000/api/')
  // Inject to context as $api
  inject('api', api)
}
