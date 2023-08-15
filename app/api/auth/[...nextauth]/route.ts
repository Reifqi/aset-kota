import startDb from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import UserModel from "@/models/userModel";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials: { email: string; password: string; }, req: any) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                await startDb();
                const user = await UserModel.findOne({ email });
                if (!user) throw new Error("email/passsword missmatch");
                const passwordMatch = await user.comparePassword(password);
                if (!passwordMatch) throw new Error("email/passsword missmatch");
                return {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    id: user._id,
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt(params: any) {
            if (params.user?.role) {
                params.token.role = params.user.role;
                params.token.id = params.user.id;
            }
            return params.token;
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as { id: string }).id = token.id as string;
                (session.user as { role: string }).role = token.role as string;
            }
            return session;
        },
    },
};

const authHandler = nextAuth(authOptions);

export { authHandler as GET, authHandler as POST }


