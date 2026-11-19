//services qui vont utiliser les repository pour faire des traitements metier et retourner les resultats aux controllers

import { createUser, findByUsername, findByEmail } from "../repositories/user.repository";
import { hashPassword } from "../utils/passwordHash";
import { userValidator } from "../validators/user.validator";

const registerUser = async(username, email, password) => {
    //valider les donnees
    const validatedData = userValidator(username, email, password);
    if(!validatedData){
        throw new Error("Invalid User data");
    }

    //check if email or username already exists
    const usernameExists = findByUsername(validatedData.username);
    if(usernameExists){
        throw new Error("Username not available. Please choose another");
    };

    const emailExists = findByEmail(validatedData.email);
    if(emailExists){
        throw new Error(" Email already exits. Please login")
    };

    // hash the password
    const hashedPassword = hashPassword(validatedData.password);

    //register a user
    const registeredUser =  createUser(validatedData.username , validatedData.email,hashedPassword);
    

    return registeredUser;
};


export{registerUser};