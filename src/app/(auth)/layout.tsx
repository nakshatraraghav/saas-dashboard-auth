import { PropsWithChildren } from "react";
import Image from "next/image";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen flex justify-between items-center">
      <div className="bg-white w-full md:w-[600px]">
        <div className="w-full">
          <Image src="/logo.svg" height={64} width={64} alt="logo" />
        </div>
        {children}
      </div>
      <div className="hidden md:flex h-full w-full items-center justify-center bg-[#fafafa]">
        <Image
          src="/illustration.svg"
          alt="auth screen man"
          className="md:w-2/3 lg:w-[693px]"
          height={427}
          width={693}
        />
      </div>
    </div>
  );
}
