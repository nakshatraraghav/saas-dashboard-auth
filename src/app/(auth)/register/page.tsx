import { OAuthButtons } from "@/components/form/oauth-buttons";
import { RegisterForm } from "@/components/form/register-form";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="p-5">
      <div className="text-2xl font-semibold text-center">Sign Up</div>
      <OAuthButtons />

      <RegisterForm />
      <div className="flex space-x-2 p-4 text-sm text-muted-foreground">
        <div>Already have an account?</div>
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}
