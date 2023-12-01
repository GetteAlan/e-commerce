const getCards = async (idAccount) => {
    try {
        const response = await fetch(`https://e-commerce.gettealan.com/api/v1/cards/${idAccount}`);

        if (response) {
            return await response.json();
        }
    }
    catch(error) {
        console.log('Error', error);
    };
};

export { getCards };


