export const logger = (req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next();
};