const getCategories = async () => {
    try {
        const response = await fetch('https://e-commerce.gettealan.com/api/v1/categories');

        if (response) {
            let result = await response.json();
            result.unshift({ id: 0, name: "All", checked: false });

            return result;
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export { getCategories };


