import { z } from "zod";

/** SIGN UP */
export const signupSchema = z.object({
    name: z.string().min(2, "Name required"),
    email: z.string().email("Invalid email"),
    mobile: z.string().min(10, "Invalid mobile"),
    password: z.string().min(6, "Min 6 chars"),
});

/** SIGN IN */
export const signinSchema = z.object({
    email: z.string().email().optional(),
    mobile: z.string().min(10).optional(),
    password: z.string().min(6),
}).refine(
    (data) => data.email || data.mobile,
    { message: "Email or mobile required" }
);

/** ACCOUNT SETUP (after login) */
export const accountSetupSchema = z.object({
    address: z.object({
        state: z.string().min(2),
        city: z.string().min(2),
        pincode: z.number(),
        street: z.string().min(3),
    }),
});