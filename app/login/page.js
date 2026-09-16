"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
const page = () => {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                <div>
                    signed in as {session.user.email}
                    <button onClick={()=>signOut({callbackUrl:"/"})}>signe out</button>
                </div>
            ) : (
                <div>
                    <div className='m-auto mt-3.5 rounded-2xl p-0.5 text-center underline decoration-red-500 border w-[20vw]'>
                        plase do the first sign up for using this app
                    </div>
                    <div className='text-center mt-3'>
                        
                    <button onClick={()=>signIn("google" , {callbackUrl:"/"})} className='border rounded-2xl p-1 '>signn in</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default page
