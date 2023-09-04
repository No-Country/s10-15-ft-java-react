import axios from 'axios';
//const API_URL = import.meta.env.VITE_API_PRODUCT_URL;



const createProduct = async (productData) => {
    try {
            const resp = await axios.post(`https://s10-15-ft-java-react-production.up.railway.app/product/save`, productData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('log')}`, // Verificar si el log esta en localstorage, si no esta, no se puede hacer la peticion
                },
            });

            if (resp) {
                console.log('Pesticion exitosa');
                
            } else {
                console.error('Petición fallida');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };



    

    

    export default createProduct;
