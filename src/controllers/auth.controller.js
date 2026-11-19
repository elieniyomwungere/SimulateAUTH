// Controller utilise les services et renvoie au routes.
import { registerUser } from "../services/auth.services.js";

const registerController = async(req, res) => {
    
    const {username , email , password} = req.body;

    // Call the registerUser service
    registerUser(username, email, password)
    .then((user) => {
        res.status(201).json({
            message: "User registered successfully",
            user: user
        });
    })
    .catch((error) => {
        throw error; // This will be caught by the error handling middleware
    });
}

export { registerController };
