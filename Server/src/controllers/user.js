import userModel from "../models/user.model";
import asyncHandler from "express-async-handler";
import { generateAccessToken, generateRefreshToken } from "../middlewares/jwt";
import jwt from "jsonwebtoken";

export const register = asyncHandler(async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    if (!email || !password || !firstname || !lastname)
        return res.status(400).json({
            success: false,
            message: "Missing inputs"
        });

    const emailUser = await userModel.findOne({ email })
    if (emailUser)
        throw new Error("This Email has exsited!");
    else {
        const newUser = await userModel.create(req.body);

        if (!newUser)
            return res.status(400).json({
                success: false,
                message: "Register is not successfull!"
            });

        return res.status(200).json({
            success: true,
            message: "Register is successfull!",
            newUser
        })
    }
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({
            success: false,
            message: "Missing inputs!"
        });

    // mongodb trả về 1 intent obj
    const response = await userModel.findOne({ email })
    // console.log(userModel.findOne({email}));
    // console.log(await response.isCorrectPassword(password)); 
    if (response && await response.isCorrectPassword(password)) {
        const { password, role, ...userData } = response.toObject();
        // create accessToken (xác thực người dùng, phân quyền người dùng)
        const accessToken = generateAccessToken(response._id, role);
        // create refreshToken (cấp mới accessToken)
        const refreshToken = generateRefreshToken(response._id);
        // save refreshToken of database
        await userModel.findByIdAndUpdate(response._id, { refreshToken }, { new: true });
        // save refreshToken in cookie
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
        return res.status(200).json({
            success: true,
            accessToken,
            userData // plain obj
        });
    } else {
        throw new Error("Invalid credentials");
    }
});

export const getCurrent = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await userModel.findById(_id).select('-refreshToken -password -role');
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'User Not Found!'
        });
    }
    return res.status(200).json({
        success: true,
        user
    });
});
