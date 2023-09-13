import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
//Logical component for a login request
const LoginPost = async ({ user, pass, setStat }) => {
  await axios
    .post(
      `${
        API_URL || 'https://s10-15-ft-java-react-production.up.railway.app'
      }/auth/login`,
      {
        userName: user,
        password: `${pass}`,
      },
    )
    .then(function (response) {
      setStat(response.status);
    })
    .catch(function (error) {
      setStat();
      error;
    });
};
export default LoginPost;
