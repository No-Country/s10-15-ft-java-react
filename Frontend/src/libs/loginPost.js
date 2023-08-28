import axios from "axios"

const LoginPost = async({user, pass, setStat, setLog, stat, API_URL})=>{
     await axios
    .post(
      `${API_URL}/auth/login`,
      {
        userName: user,
        password: `${pass}`
      }
    )
    .then(function (response) {
      console.log(response.status)
      setStat(response.status)
      stat === 200 ? setLog('true') : {}
    })
    .catch(function (error) {
      console.log(error)
    })

}
export default LoginPost