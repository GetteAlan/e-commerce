const getProductsById = async (products) => {
    try {
        const productsIds = [...new Set(products)];
        const ids = productsIds.join('|');
        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/products?products=${ids}`);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export { getProductsById };


