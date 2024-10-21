class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        throw new CustomAPIError('Resource not found', 404);
    }
}

module.exports = { CustomAPIError }