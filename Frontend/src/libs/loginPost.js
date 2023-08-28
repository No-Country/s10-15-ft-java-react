import axios from "axios"
//Logical component for a login request
const LoginPost = async({user, pass, setStat, setLog, stat, API_URL})=>{
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
      stat === 200 ? setLog('true') : {}
    })
    .catch(function (error) {
      console.log(error)
    })

}
export default LoginPost