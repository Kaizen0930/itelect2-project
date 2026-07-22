export const fetchSampleUsers = async () => {
    let users = [];
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        users = data.map((user) => {
            return { id: user.id, name: user.name, email: user.email };
        });
    } catch (error) {
        console.log(error);
        users = [];
    } finally {
        console.log('fetchSampleUsers: request finished');
    }
    return users;
};

export const fetchSampleUsersPromise = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.map((user) => {
                return { id: user.id, name: user.name, email: user.email };
            });
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
};