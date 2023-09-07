import axios from 'axios';
//const API_URL = import.meta.env.VITE_API_PRODUCT_URL;

const getAllProducts = async () => {
  try {
    const resp = await axios.get(
      `https://s10-15-ft-java-react-production.up.railway.app/product/listAll`,
    );

    if (resp.status === 200) {
      return resp.data;
    } else {
      console.error('Error al obtener los productos');
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

export default getAllProducts;
