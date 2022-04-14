import { NextApiHandler } from "next";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import prisma from "../../../lib/prisma";

const authHanlder: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHanlder;

const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET
        })
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET
}