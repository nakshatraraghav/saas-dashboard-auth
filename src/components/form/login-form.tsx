"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { loginSchema, type loginBodyType } from "@/server/schema/auth.schema";

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

import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export function LoginForm() {
  const [show, setShow] = useState<boolean>(false);

  const form = useForm<loginBodyType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const loading = form.formState.isSubmitting;
  const errors = form.formState.errors;

  function toggleShow() {
    setShow((value) => !value);
  }

  async function onSubmit(data: loginBodyType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 space-y-2">
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

        <Button className="w-full bg-[#605bff] hover:bg-[#363389] text-white">
          Submit
        </Button>
      </form>
    </Form>
  );
}
