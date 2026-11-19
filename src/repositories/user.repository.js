// Le seul module a acceder a la base de donnee : pour notre cas qui accede au data 
import users from "../data/user";

const createUser = async (username, email , password) =>{

    //create user
    const newUser = {
        id: users.length + 1,
        username:username,
        email: email,
        password: password
    };

    users.push(newUser);
    return newUser;
};

const findByUsername = (username) => {
    return users.find(user => user.username === username);
};

const findByEmail = (email) => {
    return users.find(user => user.email === email);
};

export {createUser, findByUsername, findByEmail};