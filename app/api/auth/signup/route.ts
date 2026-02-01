import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/users.model";
import { signupSchema } from "@/lib/validators/auth.validator";
import dbConnect from "@/lib/db.lib";
import { signToken } from "@/lib/auth";
import { authCookieOptions } from "@/lib/cookies";

export async function POST(req: Request) {
  try {
    await dbConnect();
    console.log("db connected");
    const body = await req.json();
    const data = signupSchema.parse(body);

    const exists = await User.findOne({
      $or: [{ email: data.email }, { mobile: data.mobile }],
    });

    if (exists) {
      return NextResponse.json({ message: "User exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
      ...data,
      password: hashedPassword,
    });

    const token = signToken({
      userId: user._id,
      role: user.role,
    });

    const res = NextResponse.json({
      message: "Signup successful",
      profileCompleted: user.profileCompleted,
    });

    res.cookies.set("token", token, authCookieOptions);

    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}