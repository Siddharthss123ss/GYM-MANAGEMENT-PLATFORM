import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/users.model";
import { signinSchema } from "@/lib/validators/auth.validator";
import dbConnect from "@/lib/db.lib";
import { signToken } from "@/lib/auth";
import { authCookieOptions } from "@/lib/cookies";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();
        const data = signinSchema.parse(body);

        const user = await User.findOne({
            $or: [{ email: data.email }, { mobile: data.mobile }],
        }).select("+password");

        if (!user) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = signToken({
            userId: user._id,
            role: user.role,
        });

        const res = NextResponse.json({
            message: "Signin successful",
            profileCompleted: user.profileCompleted,
        });

        res.cookies.set("token", token, authCookieOptions);

        return res;
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}