const getEnvVariables = () => {
  //import.meta.env;

  return {
    VITE_API_PRODUCT: import.meta.env.VITE_API_PRODUCT_URL,
    //...import.meta.env,
  };
};

export default getEnvVariables;
