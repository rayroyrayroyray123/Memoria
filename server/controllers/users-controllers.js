const { validationResult } = require('express-validator');
const { get } = require('mongoose');
const HttpError = require('../Model/http-error');
const User = require('../Model/User');
// This package can hashed the code.
const bcrypt = require('bcryptjs');

// This package can generate the token.
const jwt = require('jsonwebtoken');

const edit = async (req, res, next) => {
    let temp = {
      username: req.body.username,
      about: req.body.about,
      email: req.body.email
    };
    User.updateOne({ _id: req.body.userId}, { $set: temp })
      .exec()
      .then((doc) => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        res.status(400).json({ success: false });
      });
};


// User profile
const getUser = async (req, res, next) => {
    let user;
    try{
        console.log(req.body.userId);
        user = await User.findOne({ _id: req.body.userId}).exec().then( (docs)=> {
            console.log(docs);
            res.status(200).json({
                success: true,
                // eamil: user.email,
                // username: user.username,
                user: docs
            }) 
        }
        )
    } catch (err) {
        const error = new HttpError(
            'Fetching isers failed',
            500
        );
        return next(error);
    }
    
    // console.log(req.body.userId);
    // let user = User.findOne({ id: req.body.userId})
    // .exec()
    // .then((doc) => {
    //   console.log(user);
    //   res.status(200).json({user:user });
    // })
    // .catch((err) => {
    //   res.status(400).json({ success: false });
    // });
    
};

const signup = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return next(
            new HttpError("invalid inputs", 422)
        );
    }

    // const { firstName, lastName, password, email} = req.body;
    const { username, password, email} = req.body;

    // Check if the user existed
    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch (err){
        const error = new HttpError(
            'Signup failed',
            500
        );
        return next(error);
    }

    // If the user exist send back an error 422
    if (existingUser) {
        const error = new HttpError(
            'User exist',
            422
        );
        return next(error);
    }
    // If the user is a new one create a user
    // The password need to be hashed
    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        const error = new HttpError(
            'hash password failed',
            500
        );
        return next(error);
    }

    const createdUser = new User({
        // firstName,
        // lastName,
        // password: hashedPassword,
        // email
        username,
        about: "",
        password: hashedPassword,
        email
    });
    
    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again later.',
            500 
        );
        return next(error);
    }

    let token;
    try{
        token = jwt.sign({
            userId:createdUser.id, email: createdUser.email}, 
            "This_is_a_secret_token",
            {expiresIn: '1h'
        });
    } catch(err) {
        const error = new HttpError(
            'Signing up failed, please try again later.',
            500 
        );
        return next(error);
    }

    res.status(201).json({ 
        userId: createdUser.id, 
        email: createdUser.email, 
        // token: token 
    }); // createdUser includes the PW
}

const login = async(req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
        'Loggin in failed, please try again later.',
        500
        );
        return next(error);
    }
    console.log(existingUser);
    if (!existingUser) {
        const error = new HttpError(
        'Invalid credentials, could not log you in.',
        401
        );
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError(
        'Could not log you in, please check your credentials and try again.',
        500
        );
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError(
        'Invalid credentials, could not log you in.',
        401
        );
        return next(error);
    }

    let token;
    try{
        token = jwt.sign(
            {userId:existingUser.id, email: existingUser.email}, 
            "This_is_a_secret_token",
            {expiresIn: '1h'}
        );
    } catch(err) {
        const error = new HttpError(
            'Signing up failed, please try again later.',
            500 
        );
        return next(error);
    }

    res.json({
        userId: existingUser.id,
        email: existingUser.email,
        token: token
    });

    
}

exports.signup = signup;
exports.login = login;
exports.getUser = getUser;
exports.edit = edit;