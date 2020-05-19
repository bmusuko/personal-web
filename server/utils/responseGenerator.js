function responseGenerator(response, status, message, data) {
    return response.status(status).json({
        status,
        message,
        data
    });
}

module.exports = responseGenerator;