// Controller utilise les services et renvoie au routes.
import { registerUser } from "../services/auth.services";

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
        res.status(400).json({
            message: error.message
        });
    });
}

export { registerController };
