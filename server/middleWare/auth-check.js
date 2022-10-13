const jwt = require("jsonwebtoken");
const HttpError = require("../Model/http-error");

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1]; 
        if (!token) {
            throw new Error('Authentication failed!');
        }
        //  {userId: createdUser.id, email: createdUser.email}
        const decodeToken = jwt.verify(token, "This_is_a_secret_token");

        // We add userId when we create the token so we can use userId here
        req.userData = {userId: decodeToken.userId};
        next();
    } catch(err){
        const error = new HttpError('Authentication failed!', 401);
        return next(error);
    }

};