import { NextResponse } from "next/server";
import { getAuthUser } from "./getAuthUser";

export async function requireRole(roles: string[]) {
    const user = await getAuthUser();

    if (!user || !roles.includes(user.role)) {
        return NextResponse.json(
            { message: "Forbidden" },
            { status: 403 }
        );
    }

    return null;
}