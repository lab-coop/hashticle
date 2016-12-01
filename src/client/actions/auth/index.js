function AuthActions(authService) {
 const USER_UPDATE = 'USER_UPDATE';

 const init = (dispatch) => {
   authService.onAuthStateChanged((user) => {
     dispatch({
       type: USER_UPDATE,
       user,
     })
   })
 }

 return Object.freeze({
   USER_UPDATE,
   init
 });
}

AuthActions.deps = ['authService'];
export default AuthActions;

