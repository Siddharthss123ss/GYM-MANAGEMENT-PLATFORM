import mongoose from "mongoose";
const { Schema } = mongoose;

const gymSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },

        address: {
            state: { type: String, required: true },
            city: { type: String, required: true },
            pincode: { type: Number, required: true },
            street: { type: String, required: true },
        },

        monthlyFee: { type: Number, required: true },
        facilities: [{ type: String }],
        capacity: { type: Number, required: true },

        images: [
            {
                url: String,
                public_id: String,
            },
        ],

        adminId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        verificationStatus: {
            type: String,
            enum: ["pending", "verified", "rejected"],
            default: "pending",
        },

        isListed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Gym || mongoose.model("Gym", gymSchema);