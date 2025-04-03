import productApi from "../api/product.api";

export const GetProduct = async (title, type) => {
  try {
    let params = {}; // Inicializa un objeto de parámetros vacío

    if (title) {
      params.tittle = title; // Agrega el filtro por título si está presente
    }

    if (type) {
      params.type = type; // Agrega el filtro por tipo si está presente
    }

    const products = await productApi.get('product', { params }); // Pasa el objeto de parámetros a la API
    return products.data;
  } catch (err) {
    throw err;
  }
};

export const GetProductById = async (id) => {
  try {
    const product = await productApi.get('product/' + id);
    console.log(product);
    return product.data;
  } catch (err) {
    throw err;
  }
};

export const CreateProduct = async (productData) => {
  try {
    const response = await productApi.post('product', productData);
    return response.data;
  } catch (err) {
    throw err;
  }
};