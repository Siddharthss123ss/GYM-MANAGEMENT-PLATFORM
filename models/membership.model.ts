import mongoose from "mongoose";

const { Schema } = mongoose;

const userGymMembershipSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        gymId: {
            type: Schema.Types.ObjectId,
            ref: "Gym",
            required: true,
        },

        plan: {
            type: String,
            enum: ["monthly", "quarterly", "yearly"],
            required: true,
        },

        amount: { type: Number, required: true },

        startDate: Date,
        expiryDate: Date,

        status: {
            type: String,
            enum: ["active", "expired", "cancelled"],
            default: "active",
        },

        paymentId: {
            type: Schema.Types.ObjectId,
            ref: "Payment",
        },
    },
    { timestamps: true }
);

export default mongoose.models.UserGymMembership || mongoose.model("UserGymMembership", userGymMembershipSchema);