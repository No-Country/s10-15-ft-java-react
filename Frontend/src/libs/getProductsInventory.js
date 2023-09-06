import axios from "axios"

export const getProductsInventory = (categories, setItems, setCategories) =>{
    axios
    .get(
      'https://s10-15-ft-java-react-production.up.railway.app/product/listAll'
    )
    .then(function (response) {
      setItems(response.data.data)
      response.data.data.map((product) => {
        categories.includes(product.category)
          ? null
          : categories.push(product.category)
        setCategories(categories)
      })
    })
    .catch(function (error) {
      console.log(error)
      error
    })
}