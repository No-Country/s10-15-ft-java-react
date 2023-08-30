import axios from "axios"


//Logical component for a login request
const LoginPost = async({user, pass, setStat, API_URL})=>{
     await axios
    .post(
      `${API_URL || 'https://stockflow.up.railway.app'}/auth/login`,
      {
        userName: user,
        password: `${pass}`
      }
    )
    .then(function (response) {
    setStat(response.status)

    })
    .catch(function (error) {
      setStat()
    error
    })
}
export default LoginPost