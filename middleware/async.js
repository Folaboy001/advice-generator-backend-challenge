const asyncWrapper = (fn) => {
    // Return a new async middleware function
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error);
        };
    };
};

module.exports = asyncWrapper