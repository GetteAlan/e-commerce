const updateProductQuantity = async (idAccount, idProduct, quantity) => {
    try {
        const endpoint = `https://e-commerce.gettealan.com/api/v1/cart/${idAccount}/${idProduct}`;
        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity,
            })
        });

        const responseJson = await response.json();

        if (responseJson.affectedRows === 1) {
            return true;
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

const getCurrentCart = async (idAccount) => {
    try {
        const endpoint = `https://e-commerce.gettealan.com/api/v1/cart/${idAccount}`;
        const response = await fetch(endpoint);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export default { updateProductQuantity, getCurrentCart };
