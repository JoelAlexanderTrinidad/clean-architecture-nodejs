const logErrorHandlerMiddleware = (error, req, res, next) => {
    console.log('ERROR EN LOCAL', err);
    next(error)
}

module.exports = logErrorHandlerMiddleware;