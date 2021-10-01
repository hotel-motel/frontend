class User{
  constructor(auth) {
    this.user=auth.user
  }
  hasRole(roleName){
    let has_role=false;
    if(this.user.roles[0]!==undefined){
      for (const role of this.user.roles) {
        if (role.name===roleName){
          has_role=true;
        }
      }
    }
    return has_role;
  }
}

export default User;
