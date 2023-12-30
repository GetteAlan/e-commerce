const login = async ({username, password}) => {
    const response = await fetch('https://e-commerce.gettealan.com/api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
        })
        });
    
    return await response.json();
};

const signUp = async ({name, email, username, password, reEnteredPassword}) => {
    const response = await fetch('https://e-commerce.gettealan.com/api/v1/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            username,
            password,
            reEnteredPassword,
        })
    });

    return await response.json();
};

export { login, signUp };
