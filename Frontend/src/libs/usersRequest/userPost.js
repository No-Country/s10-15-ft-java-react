import axios from 'axios';
const userPost = async (userData) => {
  await axios.post(
    `https://s10-15-ft-java-react-production.up.railway.app/user`,
    userData,
  );
};
export default userPost;
