const getPurchases = async (idAccount) => {
    try {
        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/purchases/${idAccount}`);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

const getPurchaseDetail = async (idAccount, idPurchase) => {
    try {
        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/purchases/${idAccount}/${idPurchase}`);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

const confirmPurchase = async (idAccount) => {
    try {
        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/purchases/${idAccount}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                purchaseDate: new Date(),
            })
        });

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export { getPurchases, confirmPurchase, getPurchaseDetail };


