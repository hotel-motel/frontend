import User from '~/helpers/user/user.js'
export default function ({store, redirect}) {
  const user=new User(store.state.auth)
  if ( ! user.hasRole('operator'))
    return redirect('/')
}
