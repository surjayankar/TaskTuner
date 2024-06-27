import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import {ConvexAdapter} from "./app/ConvexAdapter"

if(process.env.CONVEX_AUTH_PRIVATE_KEY === undefined){
  throw new Error("Missing CONVEX_AUTH_PRIVATE_KEY");
}
if(process.env.NEXT_PUBLIC_CONVEX_URL === undefined){
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL");
}
if(process.env.JWKS === undefined){
  throw new Error("Missing JWKS");
}

const CONVEX_SITE_URL=process.env.NEXT_PUBLIC_CONVEX_URL!.replace(
  /.clouds$/,
  ".site"
);
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      authorization:{params:{prompt:"consent"}}
    }),
  ],
  adapter:ConvexAdapter,
  callbacks:{
    async session({session}){
      const privateKey=await importPKCS8(process.env.CONVEX_AUTH_PRIVATE_KEY!,'RS256')
      const convexToken=await new SignJWT({
        sub:session.userId
      }).setProtectedHeader({alg:'RS256'})
      .setIssuedAt()
      .setIssuer(CONVEX_SITE_URL)
      .setAudience('convex')
      .setExpirationTime('1h')
      .sign(privateKey);
      return {...session,convexToken}
    }
  }
});