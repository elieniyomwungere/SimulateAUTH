//Validation des donnees des utilisateurs

const userValidator = (username, email, password) => {
    
    //validate email
    if(typeof email !== "string" || !email.trim()){
      throw new Error("Email is required and must be a string");
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      throw new Error("Email is not valid");
    }
    email= email.trim().toLocaleLowerCase();

    //validate username
    if(typeof username !== "string" || !username.trim()){
        throw new Error("Username is required and must be a string");
    }
    
    if(username.length < 5){
        throw new Error("Username must be at least 5 caracters");
    }
     username= username.trim().toLocaleLowerCase();

    //validate password
    if(typeof password !== "string" || !password.trim()){
        throw new Error("Password is required and must be string");
    }

    if(password.length < 8){
        throw new Error("Password must be at least 8 caracters");
    }

    password= password.trim();

    return{
        username, 
        email, 
        password
    }

};

export {userValidator} ;