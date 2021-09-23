export default function ({store, redirect}) {
  let is_operator=false;
  if (store.state.auth.user.roles[0]!==undefined){
    for (const role of store.state.auth.user.roles) {
      if (role.name==='operator'){
        is_operator=true;
      }
    }
  }
  if ( ! is_operator)
    return redirect('/')
}
