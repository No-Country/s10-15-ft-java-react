import axios from 'axios';
const postImageProduct = async (formData) => {
await axios.post(
      'https://s10-15-ft-java-react-production.up.railway.app/files/upload',formData)};
export default postImageProduct;

