import mongoose from "mongoose";

const { Schema } = mongoose;

const gymVerificationSchema = new Schema(
    {
        gymId: {
            type: Schema.Types.ObjectId,
            ref: "Gym",
            required: true,
        },

        verifiedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },

        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },

        remarks: String,
        verifiedAt: Date,
    },
    { timestamps: true }
);

export default mongoose.models.GymVerification || mongoose.model("GymVerification", gymVerificationSchema);