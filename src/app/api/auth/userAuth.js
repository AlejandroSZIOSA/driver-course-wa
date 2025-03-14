import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "../../../sanityClient";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    // Google OAuth Provider
    /* GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }), */

    // Credentials (Email & Password Login)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const query = `*[_type == "user" && email == $email][0]`;
        const user = await client.fetch(query, { email: credentials.email });

        if (!user) throw new Error("User not found");
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid password");

        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Check if user exists in Sanity, if not, create a new one
      const query = `*[_type == "user" && email == $email][0]`;
      const existingUser = await client.fetch(query, { email: user.email });

      if (!existingUser) {
        await client.create({
          _type: "user",
          name: user.name,
          email: user.email,
          role: "user",
        });
      }
      return true;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
