import axios from 'axios';
//const API_URL = import.meta.env.VITE_API_PRODUCT_URL;

const createProduct = async (productData) => {
  try {
    const resp = await axios.post(
      `https://s10-15-ft-java-react-production.up.railway.app/product/save`,
      productData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (resp) {
      resp;
    } else {
      resp;
    }
  } catch (error) {
    error;
  }
};

export default createProduct;
