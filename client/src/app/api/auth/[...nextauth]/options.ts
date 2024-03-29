import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Your Username" },
                password: { label: "Password", type: "password", placeholder: "Your Password" },
            },
            async authorize(credentials) {
                const user = { id: "01", username: "hannahtesting2210@gmail.com", password: "pass" }

                if (credentials?.username === user.username && credentials?.password === user.password) {
                    console.log("Correct credentials")
                    return user
                } else {
                    console.log("Incorrect credentials")
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: "/signin",
    },
}

export default authOptions