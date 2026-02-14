import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db.lib";
import Gym from "@/models/gyms.model";
import { getAuthUser } from '@/lib/getAuthUser';

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();

    const { userId } = await getAuthUser();

    const gym = await Gym.findById(params.id);

    if (!gym) {
        return NextResponse.json({ message: "Gym not found" }, { status: 404 });
    }

    if (gym.adminId.toString() !== userId) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    if (gym.verificationStatus === "verified") {
        return NextResponse.json({ message: "Verified gyms cannot be edited" }, { status: 400 });
    }

    const updated = await Gym.findByIdAndUpdate(params.id, req.json(), {
        new: true,
    });

    return NextResponse.json(updated);
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await connectDB();

    const { userId } = await getAuthUser();

    const gym = await Gym.findById(params.id);

    if (!gym) {
        return NextResponse.json({ message: "Gym not found" }, { status: 404 });
    }

    if (gym.adminId.toString() !== userId) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await gym.deleteOne();

    return NextResponse.json({ message: "Gym deleted" });
}