import axios from 'axios';

export const getUsers = async (setUsers) => {
  await axios
    .get('https://s10-15-ft-java-react-production.up.railway.app/user/listAll')
    .then(function (response) {
      if (response.data.data === undefined) {
        return console.log('no hay usuarios');
      } else {
        setUsers(response.data.data);
      }
    })
    .catch(function (error) {
      error;
    });
};
