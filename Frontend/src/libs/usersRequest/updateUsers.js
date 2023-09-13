import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
export const updateUsers = async (formData) => {
  await axios.put(
    `${
      API_URL || 'https://s10-15-ft-java-react-production.up.railway.app'
    }/product/update`,
    {
      id: formData.id,
      userName: formData.userName,
      role: formData.role,
      email: formData.email,
    },
  );
};
