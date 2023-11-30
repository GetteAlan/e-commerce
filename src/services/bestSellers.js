const getBestSellers = async () => {
    try {
        const response = await fetch('https://e-commerce.gettealan.com/api/v1/products?target=bestsellers');

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export { getBestSellers };


