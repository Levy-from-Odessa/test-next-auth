
"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import type {AppProps} from 'next/app'

const SignOut = () => {
  const { data: session } = useSession();
  const isLoggedIn = session?.user?.name;

  return (
    <button
      onClick={() => isLoggedIn ? signOut() : signIn}
      className="bg-sky-500 rounded-xl p-3"
    >
      {isLoggedIn ? "Sign Out" : "Sign In"}
    </button>
  )
}

export default SignOut;