import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL
export const updateProducts = (formData) =>{
    axios.put(
        `${API_URL || 'https://s10-15-ft-java-react-production.up.railway.app'}/product/update`,
        {
            id: formData.id,
            category: formData.category,
            productName:formData.productName,
            itemCode: formData.itemCode,
            uniPrice: formData.uniPrice,
            quantityStock: formData.quantityStock
    }
    )
}