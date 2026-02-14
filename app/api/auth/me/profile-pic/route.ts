import User from "@/models/users.model";
import { NextResponse } from "next/server";
import { getAuthUser } from "@/lib/getAuthUser";
import { ImageHandler } from "@/lib/image.handler";

/* ================= UPLOAD ================= */
export async function POST(req: Request) {
    try {
        const { userId } = await getAuthUser();
        const formData = await req.formData();
        const file = formData.get("file");

        if (!file || !(file instanceof Blob)) {
            return NextResponse.json({ error: "Invalid file" }, { status: 400 });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const upload = await ImageHandler.handleUpload(file, "user_profiles");

        await ImageHandler.safeDelete(user.image?.public_id);

        user.image = {
            url: upload.url,
            public_id: upload.public_id,
        };

        await user.save();

        return NextResponse.json({
            success: true,
            image: user.image,
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
}

/* ================= DELETE ================= */
export async function DELETE() {
    try {
        const { userId } = await getAuthUser();

        const user = await User.findById(userId);
        if (!user || !user.image?.public_id) {
            return NextResponse.json({ success: true });
        }

        await ImageHandler.safeDelete(user.image.public_id);

        user.image = undefined;
        await user.save();

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
}