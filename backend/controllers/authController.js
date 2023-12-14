import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


export const registerController = async (req,res) => {
    try {
        const {name, email, password, phone, address, answer} = req.body;

        //validations
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone number is required'})
        }
        if(!address){
            return res.send({message:'Address is required'})
        }
        if(!answer){
            return res.send({message:'Answer is required'})
        }

        //check user
        const existingUser = await userModel.findOne({email});
        
        //existing user
        if(existingUser){
            return res.status(200).send({
                success: false,
                message: 'Already registered. Please login'
            })
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({name, email, phone, address, answer, password: hashedPassword}).save();

        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
};


//POST LOGIN
export const loginController = async (req,res) => {
    try {
        const {email, password} = req.body;

        //validation
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }

        //check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }

        //token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.status(200).send({
            success: true,
            message: "Login Successful",
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}

export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };


  export const forgotPasswordController = async (req, res) => {
    try {
        const {email, answer, newPassword} = req.body;
        if(!email){
            res.status(400).send({message: "Email is required"});
        }
        if(!answer){
            res.status(400).send({message: "Answer is required"});
        }
        if(!newPassword){
            res.status(400).send({message: "New Password is required"});
        }
        //check
        const user = await userModel.findOne({email, answer});
        //validation
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Wrong Email or Answer"
            })
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, {password: hashed});
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(200).send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
  }