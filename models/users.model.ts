import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
        },

        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            sparse: true,
        },

        mobile: {
            type: String,
            unique: true,
            required: true,
        },

        password: {
            type: String,
            required: true,
            select: false,
        },

        image: {
            url: String,
            public_id: String,
        },

        /** ADDRESS (for gym suggestions) */
        address: {
            state: String,
            city: String,
            pincode: Number,
            street: String,
        },

        /** ROLES */
        role: {
            type: String,
            enum: ["user", "gym_admin", "verifier", "super_admin"],
            default: "user",
        },

        /** PROFILE FLOW */
        profileCompleted: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ["active", "blocked", "suspended"],
            default: "active",
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);