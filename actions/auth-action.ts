'use server'

import { signIn } from "@/auth"

export async function signInActiom() {
    await signIn('google',{redirectTo:"/loggedin"});
}

