import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db.lib";
import Gym from "@/models/gyms.model";
import { getAuthUser } from '@/lib/getAuthUser';

export async function POST(req: NextRequest) {
    await connectDB();

    const { userId } = await getAuthUser();

    const body = await req.json();

    try {
        const gym = await Gym.create({
            ...body,
            adminId: userId,
            verificationStatus: "pending",
            isListed: false,
        });

        return NextResponse.json(gym, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Gym creation failed" }, { status: 400 });
    }
}

export async function GET(req: NextRequest) {
    await connectDB();

    const { userId, role } = await getAuthUser();

    if (role === "super_admin") {
        const gyms = await Gym.find().populate("adminId", "name email");
        return NextResponse.json(gyms);
    }

    const gyms = await Gym.find({ adminId: userId });
    return NextResponse.json(gyms);
}