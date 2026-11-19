// middleware de journalisation

const loggerMiddleware = (req, res, next) => {
    const path = req.originalUrl;
    const method = req.method;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${path}`);
    next();
}

export default loggerMiddleware;