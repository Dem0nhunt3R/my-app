const getUsers = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
};

export {getUsers};