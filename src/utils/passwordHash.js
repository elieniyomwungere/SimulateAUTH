//Outil de hashage de mot de passe
import bcrypt from "bcryptjs";

//Fonction pour hasher le mot de passe

const hashPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export {hashPassword};