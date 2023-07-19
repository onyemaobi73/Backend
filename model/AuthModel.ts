import mongoose from "mongoose";
import {iAuth} from "../utils/interface"

interface iAuthData extends iAuth, mongoose.Document {}
const authSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            require : true,
        },
        avatar: {
            type: String,
        },
    },
    { timestamps: true},
);

export default mongoose.model<iAuthData>("auths", authSchema);