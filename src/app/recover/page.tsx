"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  email: z.string().email(),
});

type formType = z.infer<typeof formSchema>;

export default function RecoverPassword() {
  const [mount, setMount] = useState<boolean>(false);

  const form = useForm<formType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  async function onSubmit(data: formType) {
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="flex flex-col items-center">
            <Image src="/logo.svg" height={64} width={64} alt="asdasd" />
          </CardTitle>
          <CardDescription className="text-center text-2xl text-black font-bold">
            Recover Password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public Email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                size={"sm"}
                className="w-full bg-[#605bff] hover:bg-[#2b287a]"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
