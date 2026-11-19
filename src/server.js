//Point d'entree principale
import express from 'express';
import userRoutes from './routes/user.routes.js';
import loggerMiddleware from './middlewares/logger.middleware.js';

const app = express();
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST ?? "127.0.0.1";

//Middlewares
app.use(loggerMiddleware);
app.use(express.json());


//Routes 
app.use("/api/users", userRoutes);


app.get('/health',(req, res) => {
    res.status(200).json({
        success:true,
        message: "Server is running",
    })
})
//middleware d'erreurs
app.use(errorHandlerMiddleware);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);    
})