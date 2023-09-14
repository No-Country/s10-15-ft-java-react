import axios from 'axios';
export const deleteUser = async (id) => {
  await axios.delete(
    `https://s10-15-ft-java-react-production.up.railway.app/user/${id}`,
  );
  return(location.reload())
};
