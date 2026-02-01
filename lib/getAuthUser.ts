import { cookies } from "next/headers";
import { verifyToken } from "./auth";
import { JwtUserPayload } from "./auth";

export type AuthUser = JwtUserPayload;

export async function getAuthUser(): Promise<AuthUser> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("UNAUTHORIZED");
    }

    try {
        return verifyToken(token);
    } catch {
        throw new Error("UNAUTHORIZED");
    }
}