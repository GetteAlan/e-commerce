const getProductsById = async (products) => {
    try {
        const productsIds = [...new Set(products)];
        const ids = productsIds.join('|');
        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/products?products=${ids}&limit=100`);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

const getProducts = async (offset, limit, categories, priceFrom, priceTo) => {
    try {
        // price query
        const priceFromQuery = priceFrom ? `&priceFrom=${priceFrom}` : '';
        const priceToQuery = priceTo ? `&priceTo=${priceTo}` : '';

        // category query
        let categoriesQuery = categories && categories !== '' ? `&categories=${categories}` : '';

        // limit query
        const limitQuery = limit ? `&limit=${limit}` : '';
        
        // offset query
        const offsetQuery = offset ? `offset=${offset}` : '';

        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/products?${offsetQuery}${limitQuery}${priceFromQuery}${priceToQuery}${categoriesQuery}`);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export { getProductsById, getProducts };


