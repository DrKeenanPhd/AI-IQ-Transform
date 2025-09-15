
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // This is a mockup - always return success for testing
        if (credentials?.email && credentials?.password) {
          return {
            id: '1',
            email: credentials.email,
            name: 'Test User'
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/',
    signUp: '/',  
    error: '/',
  },
  callbacks: {
    async signIn() {
      return true; // Allow signin for testing
    },
    async session({ session, token }: any) {
      return session
    },
    async jwt({ token }: any) {
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
