const handleErrors = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        code: err.status,
        msg: err.message
    });
}


module.exports = handleErrors;