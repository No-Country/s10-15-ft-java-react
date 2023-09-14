import axios from 'axios';
export const deleteProduct = async (id) => {
  await axios.delete(
    `https://s10-15-ft-java-react-production.up.railway.app/product/delete/${id}`,
  );
  return location.reload();
};
