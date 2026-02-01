import mongoose from "mongoose";

const { Schema } = mongoose;

const paymentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        gymId: {
            type: Schema.Types.ObjectId,
            ref: "Gym",
        },

        purpose: {
            type: String,
            enum: ["platform_subscription", "gym_membership"],
            required: true,
        },

        amount: { type: Number, required: true },

        provider: {
            type: String,
            enum: ["razorpay", "stripe"],
            required: true,
        },

        orderId: String,
        paymentId: String,

        status: {
            type: String,
            enum: ["created", "success", "failed"],
            default: "created",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Payment || mongoose.model("Payment", paymentSchema);