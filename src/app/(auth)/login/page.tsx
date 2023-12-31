import Link from "next/link";

import { LoginForm } from "@/components/form/login-form";
import { OAuthButtons } from "@/components/form/oauth-buttons";

export default function LoginPage() {
  return (
    <div className="p-5">
      <div className="text-2xl font-semibold text-center">Log In</div>
      <OAuthButtons />
      <LoginForm />
      <div className="flex space-x-2 p-4 text-sm text-muted-foreground">
        <div>Need an account?</div>
        <Link href="/register" className="underline">
          Register
        </Link>
      </div>
    </div>
  );
}
