const saveLogHandlerMiddleware = (error, req, res, next) =>{
    saveLogError(error);

    next(error)
}

module.exports = saveLogHandlerMiddleware;