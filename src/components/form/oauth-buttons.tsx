"use client";

import { Button } from "../ui/button";

export function OAuthButtons() {
  return (
    <div className="px-4 mt-6">
      <div className="flex justify-between items-center space-x-2">
        <Button
          type="button"
          variant={"outline"}
          className="w-full"
          size={"sm"}
        >
          Google
        </Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-full"
          size={"sm"}
        >
          Facebook
        </Button>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-foreground">Or</p>
      </div>
    </div>
  );
}
