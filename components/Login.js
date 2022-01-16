import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className='grid place-items-center'>
      <Image
        src='https://i.ibb.co/PchnXDn/1024px-Facebook-Logo-2019.png'
        width={200}
        height={200}
        objectFit='contain'
      />
      <h1
        // onClick={signIn}
        onClick={() => signIn()}
        className='p-5 bg-blue-500 rounded-full text-white center cursor-pointer'>
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
