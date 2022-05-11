const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
    try {
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) {
        return res.status(404).json("Email already exist")
    }
        // hashing password
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = new User ({
            fullName: req.body.fullName,
            userName: req.body.userName,
            email: req.body.email,
            password: hash,
            mobileNumber: req.body.mobileNumber
        })
        await user.save();
        res.status(200).json("Registered Successfully");
    
    } catch (err) {
       res.status(404).json(err)
    }
}

const login = async (req,res) => {
    const email = await User.findOne({ email: req.body.email });
    if(!email) {
        res.status(404).json("Incorrect Email");
    }
    const password = await bcrypt.compare(req.body.password, email.password);
    if(!password) {
        res.status(404).json("Incorrect Password");
    }
    const userToken = jwt.sign({ email: email }, process.env.SECRET_KEY);
    res.header('user',userToken).json({
        "token": userToken
    })
}

exports.register = register;
exports.login = login;