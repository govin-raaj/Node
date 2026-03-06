import mongoose from "mongoose"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        avatar: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        refreshToken: {
            type: String
        }
    },
    { timestamps: true }
);


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return
    this.password = bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken = async function () {
    return await jwt.sign({
        _id: this._id,
        userName: this.userName,
        email: this.email,
        fullName: this.fullName
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRY }
    )
}

UserSchema.methods.generateRefreshToken = async function () {
     return await jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRY }
    )
}


export const User = mongoose.model("User", UserSchema)