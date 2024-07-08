import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// Login User

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if (!user) {
            res.json({success: false, message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.json({success: false, message:"Incorrect Password"})
        }

        const token = createToken(user._id);
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message:"Error Encountered"})
    }
}


const createToken = (id) =>{

    return jwt.sign({id}, process.env.JWT_SECRET)
}
// Register User

const registerUser = async (req,res) => {
    const {name, password, email} = req.body;
    try {
        // validating the existing user
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false, message:"User already exists"})
        }

        // validating email format and strong password

        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Invalid email"})
        }

        if (password.length < 8) {
            return res.json({success:false, message:"Requires Strong password"})
        }

        // Hashing (Encrypting) user password

        const salt = await bcrypt.genSalt(10) //Range: 5 - 15, higher the number, stronger the password and more the time required

        const hashedPassword = await bcrypt.hash(password, salt);

        //new user

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        
        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error encountered"})
    }
}

export {loginUser, registerUser}