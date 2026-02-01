import jwt from "jsonwebtoken";

export interface JwtUserPayload {
    userId: string;
    role: string;
}

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(payload: any) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: "7d",
    });
}

export function verifyToken(token: string): JwtUserPayload {
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as JwtUserPayload;

    return decoded;
}