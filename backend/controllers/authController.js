import User from "../model/user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export const login = async(req, res) => {
    try{
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(!user){
            return res.status(400)
                      .json({message : "User does not exist"});
        }

        const correctPassword = await bcrypt.compare(password, user.passwordHash);

        if(!correctPassword){
            return res.status(400)
                      .json({message : "Incorrect Password"});
        }

        const token = jwt.sign(
            {
                userId : user._id,
                username,
                name : user.name
            },
            process.env.JWT_SECRET
        )

        return res.status(200)
            .cookie("inventoryToken", token, 
            {
                httpOnly : true,
                secure : false,
                sameSite : "strict"
            })
            .json(
            {
                message : "Login Succesfull !",
                user : {
                    id: user._id,
                    username : user.username,
                    name : user.name
                }, 
                redirect : '/dashboard'
            })
    }
    catch(err){
        console.log("Login Error : ", err);
        return res.status(500)
                  .json({message : "Server Error"});
    }
}

export const signIn = async (req, res) => {
    try{
        const {name, username, password} = req.body;

        const user = await User.findOne({username});

        if(user){
            return res.status(400)
                      .json({message : "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 7);

        const newUser = await User.create({
            name, 
            username, 
            passwordHash : hashedPassword
        })

        return res.status(201)
                  .json({
                    message : "User created successfully !",
                    user : {
                        id : newUser._id,
                        name, 
                        username
                    }
                  })
    }
    catch(err){
        console.log("Sign In Error : ",err);
        return res.status(500)
                  .json({message : "Server Error"});
    }
}

export const logout = async (req, res) => {
    try{
        return res.status(200)
                  .clearCookie('inventoryToken', {
                    httpOnly : true,
                    secure : false,
                    sameSite : 'strict'
                  })
                  .json({message : "Logout Successfull !"})
    }
    catch(err){
        console.log("Logout Error : ", err);
        res.status(400)
            .json({message : "Server Error"});
    }
}