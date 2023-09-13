import axios from 'axios';

export const getUsers = async (setUsers) => {
  await axios
    .get('https://s10-15-ft-java-react-production.up.railway.app/user/listAll')
    .then(function (response) {
      setUsers(response.data.data.users);
    })
    .catch(function (error) {
      error;
    });
};
