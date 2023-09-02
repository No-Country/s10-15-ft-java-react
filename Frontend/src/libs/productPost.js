import axios from 'axios';
const API_URL = import.meta.env.VITE_API_PRODUCT_URL;


const createProduct = async (productData) => {
        try {
            const response = await axios.post(`${API_URL}/product/save`, productData);
    
            // Verifica la respuesta y maneja cualquier lógica necesaria aquí
            if (response.status === 200) {
                console.log('Producto creado exitosamente');
                // Realiza cualquier acción adicional que necesites
            } else {
                console.error('Error al crear el producto');
                // Maneja el error según sea necesario
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            // Maneja el error de red o cualquier otro error aquí
        }
    };



    

    

    export default createProduct;
