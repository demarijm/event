import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: 'J Smith', email: '', image: '' }
        if (user) {
          return user
        }
        return null
      }
    }
  )],
}

  return await NextAuth(req, res, {
    ...authOptions,
    
  })
}