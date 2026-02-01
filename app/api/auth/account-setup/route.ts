import { NextResponse } from "next/server";
import User from "@/models/users.model";
import { accountSetupSchema } from "@/lib/validators/auth.validator";
import dbConnect from "@/lib/db.lib";
import { getAuthUser } from "@/lib/getAuthUser";

export async function POST(req: Request) {
    try {
        await dbConnect();
      
        const { userId } = await getAuthUser();
        
        if (!userId) {
            return NextResponse.json(
                { error: "User ID missing in request" },
                { status: 400 }
            );
        }
        
        const body = await req.json();

        const { address } = body;

        accountSetupSchema.parse({ address });

        await User.findByIdAndUpdate(userId, {
            address,
            profileCompleted: true,
        });

        return NextResponse.json({
            message: "Account setup completed",
        });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message },
            { status: 400 }
        );
    }
}