import User from '@/models/users.model';
import { NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/getAuthUser';

export async function GET(request: Request) {
    try {
        const { userId } = await getAuthUser();

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, user });
        
    } catch (error) {
        return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }
}