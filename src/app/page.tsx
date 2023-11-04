import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex flex-col space-y-4">
        <li>
          <Link className={buttonVariants()} href={"/login"}>
            Login
          </Link>
        </li>
        <li>
          <Link className={buttonVariants()} href={"/register"}>
            Register
          </Link>
        </li>
        <li>
          <Link className={buttonVariants()} href={"/recover"}>
            Recover
          </Link>
        </li>
      </ul>
    </main>
  );
}
