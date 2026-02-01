import mongoose from "mongoose";

const { Schema } = mongoose;

const platformSubscriptionSchema = new Schema(
    {
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
            enum: ["pending", "active", "expired"],
            default: "pending",
        },

        paymentId: {
            type: Schema.Types.ObjectId,
            ref: "Payment",
        },
    },
    { timestamps: true }
);

export default mongoose.models.PlatformSubscription || mongoose.model("PlatformSubscription", platformSubscriptionSchema);