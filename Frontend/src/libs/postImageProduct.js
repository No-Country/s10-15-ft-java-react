import axios from 'axios';

const postImageProduct = async (imagen) => {
  try {

    const response = await axios.post(
      'https://s10-15-ft-java-react-production.up.railway.app/files/upload',
      imagen,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Asegura que el servidor interprete la solicitud como una carga de archivo
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('Error al cargar la imagen');
  }
};

export default postImageProduct;

