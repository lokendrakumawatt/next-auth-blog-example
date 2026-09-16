"use client";

import React from "react";
import { signIn } from "next-auth/react";

const page = () => {
return ( <main className="min-h-screen flex items-center justify-center"> <div className="text-center">

    <h1 className="text-4xl font-bold">
      NextAuth + Blog
    </h1>

    <p className="mt-3 text-gray-500">
      A simple example of authentication and blog in Next.js.
    </p>

    <div className="mt-6 flex justify-center gap-4">
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="border rounded-2xl px-4 py-2 hover:bg-gray-100"
      >
        Sign in with Google
      </button>

 
    </div>

  </div>
</main>


);
};

export default page;
