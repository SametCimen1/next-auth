import NextAuth from 'next-auth';
import {authConfig} from "./auth.config"
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';
import data from './data.json'


async function getUser(email: string){
    let user = data.find((element) => element.email === email);
    
    console.log("USER");
    console.log(user);
    return user;
}

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials){
                const parsedCredentials = z
                .object({email: z.string().email(), password: z.string().min(1)})
                .safeParse(credentials);

                if(parsedCredentials.success){
                    const {email, password} = parsedCredentials.data;
                    const user = await getUser(email);
                    if(!user) return null;
                    // const passwordMatch = await bcrypt.compare(password, user.password);
                    const passwordMatch = true;

                    if(passwordMatch) return user;
                }
                console.log("invalid credentials");
                return null;
            }
        })
    ]
})