export const types = {
  authLogin: 'authLogin',
  authLogout: 'authLogout'
}

export const initialUser = {
  id: 0,
  username: '',
  role: '',
  img: '',
  auth:{
  }
}

const userReducer = (state, action) =>{
  switch (action.type) {
    case types.authLogin:
      return{
        ...state,
        auth: action.payload
      }
    case types.authLogout:
      return{
        auth: setLog('false')
      }
    default:
      return state
  }
}

export default userReducer