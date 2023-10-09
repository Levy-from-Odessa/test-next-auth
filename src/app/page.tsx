import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import ClientButton from "@/app/components/client/ClientButton";
import Image from "next/image";


export default async function Home() {
  const session = await getServerSession();

  const userImage = () => {
    return (<div className="flex w-full mb-3">
      <img src={session?.user?.image || ''} alt="user's image" className="w-12 h-12" />
      <span className="ml-3">
        name - {session?.user?.name}
      </span>
    </div>)
  }
  
  return (
    <div className="drop-shadow-md w-4/12 h-4/12 m-auto mt-10 bg-slate-200 place-content-center p-3">
      {session?.user?.name ? userImage() : <div>Not logged in</div>}
      <ClientButton />
    </div>
  )
}
