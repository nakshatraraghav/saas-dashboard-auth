"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  registerSchema,
  type registerBodyType,
} from "@/server/schema/auth.schema";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export function RegisterForm() {
  const form = useForm<registerBodyType>({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      agree: false,
    },
    resolver: zodResolver(registerSchema),
  });

  const [show, setShow] = useState<boolean>(false);

  const loading = form.formState.isSubmitting;
  const errors = form.formState.errors;

  function toggleShow() {
    setShow((value) => !value);
  }

  async function onSubmit(data: registerBodyType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jiangyu" {...field} />
              </FormControl>
              {!errors["name"] && (
                <FormDescription>
                  This is your public Email Address.
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your Email Address.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johnkevine4362" {...field} />
              </FormControl>
              <FormDescription>This is your public Username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex space-x-1">
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="*********"
                    {...field}
                  />
                  <Button
                    type="button"
                    className=""
                    variant={"outline"}
                    onClick={toggleShow}
                    size={"icon"}
                  >
                    {show ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </Button>
                </div>
              </FormControl>

              <FormDescription>This is your Private Password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormDescription>
                  By creating an account you agree to the terms of use and our
                  privacy policy.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button className="w-full bg-[#605bff] hover:bg-[#363389] text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
}
