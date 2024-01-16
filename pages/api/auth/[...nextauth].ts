import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import prisma from '@/libs/prismadb'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

//GoogleProvider = google icin giris 
//CredentialsProvider = giris islemleri ici, kontol


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text"},
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials, req) {

          //credentials icerisinde email ve password bulamazsan hata don
          if (!credentials?.email || !credentials.password) {
            throw new Error("email veya password gecersiz")
          }

          //prisma uzerinde email'e gore user'ları bulucaz 
          const user = await prisma.user.findUnique({
            where:{
              //credentials icerisinde email?
              email: credentials.email
            }
          })

          //user bulamazsan, user uzerine boyle yapı yoksa 
          if (!user || !user.hashedpassword) {
            throw new Error("kulanıcı bulunamadı") 
          }

          //user ile disarıdan gonderdigimiz sifre esit ise compare olacak, degil ise hata donecek "bcrypt" kutuphanesi kulanıldı
          const comparePassword  =await bcrypt.compare(credentials.password, user.hashedpassword)

          //compare ile karsıalstırdık, gonderdigimiz sife ile veritabanındaki sifre uyusmaz ise hata don
          if (!comparePassword) {
            throw new Error("Sifreniz Hatalı") 
          }

          return user
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  debug: process.env.NODE_ENV ==="development",
  session: {
    strategy: "jwt"
  },
  secret:process.env.NEXTAUTH_SECRET

}

export default NextAuth(authOptions)


//credentials = e-posta ve sifre ile girisleri destekliyor