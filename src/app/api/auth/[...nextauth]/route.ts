import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import  GithubProvider  from 'next-auth/providers/github';



export const authOptions = {
  // pages: {
  //   signIn: "api/auth/signin",
  // },
  secret: process.env.NEXT_AUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }