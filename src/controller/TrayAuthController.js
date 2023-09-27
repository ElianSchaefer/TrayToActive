const TrayAuthService = require('../services/TrayAuthService');

exports.getAuth = async(req, res) => {
    try {
        const ret = await TrayAuthService.getAuth(req);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}
