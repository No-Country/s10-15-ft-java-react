export const types = {
  authLogin: 'authLogin',
  authLogout: 'authLogout',
  userUpdate: 'userUpdate'
}

export const initialUser = {
  user:{
    id: 0,
    username: 'Administrador',
    role: 'admin',
    img: 'user.png'},
  auth:{
  }
}

const userReducer = (state, action) =>{
  switch (action.type) {
    case types.authLogin:
      return{
        ...state,
        auth: {log: 'true'}
      }
    case types.authLogout:
      return{
        ...state,
        auth: {log: 'false'}
      }
      case types.userUpdate:
        return{
          ...state,
          user: action.payload
        }
    default:
      return state
  }
}

export default userReducer