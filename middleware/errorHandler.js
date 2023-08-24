const ErrResponse = require("../utils/errResponse")

const errorHandler = (err, req, res, next) =>{
    let error = {
        ...err
    }

    error.message = err.message
    console.log(err)

        // Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrResponse(message, 400);
    }

    
}

module.exports = errorHandler;
