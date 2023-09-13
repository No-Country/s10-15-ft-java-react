import axios from 'axios';
//const API_URL = import.meta.env.VITE_API_PRODUCT_URL;
const createProduct = async (productData) => {
  await axios.post(
    `https://s10-15-ft-java-react-production.up.railway.app/product/save`,
    productData,
  );
};
export default createProduct;
