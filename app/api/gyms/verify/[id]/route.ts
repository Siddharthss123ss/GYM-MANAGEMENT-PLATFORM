import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db.lib";
import Gym from "@/models/gyms.model";
import { getAuthUser } from "@/lib/getAuthUser";

export async function PATCH(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    await connectDB();

    const { id } = await context.params;

    const { userId, role } = await getAuthUser();

    if (!userId || role !== "super_admin") {
        return NextResponse.json(
            { message: "Only Super Admin allowed" },
            { status: 403 }
        );
    }

    const { status } = await req.json();

    if (!["approved", "rejected"].includes(status)) {
        return NextResponse.json(
            { message: "Invalid status" },
            { status: 400 }
        );
    }

    const gym = await Gym.findById(id); // ✅ use awaited id

    if (!gym) {
        return NextResponse.json(
            { message: "Gym not found" },
            { status: 404 }
        );
    }

    gym.verificationStatus =
        status === "approved" ? "verified" : "rejected";

    gym.isListed = status === "approved";

    await gym.save();

    return NextResponse.json({
        message: `Gym ${status} successfully`,
    });
}