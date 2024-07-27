import React, { useState } from "react";
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
import { PrimaryButton } from "@/components/atoms/Button";
import { useLoginForm } from "@/hooks/useLoginForm";
import Link from "next/link";

/**
 * ログインフォーム
 */
const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 w-96 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className=" selection:scale-125"
                    placeholder="ex) example@test.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your account email.</FormDescription>
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
                  <Input
                    className=" selection:scale-125"
                    placeholder="ex) 123@hoge"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your account password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <PrimaryButton
            type="submit"
            className=" w-1/4 transition-all duration-75"
          >
            LogIn
          </PrimaryButton>
        </form>
      </Form>

      <Link
        className=" duration-500 cursor-pointer text-blue-400 hover:text-blue-700 active:opacity-50 active:scale-90"
        href="/"
      >
        Forgot Password?
      </Link>
    </>
  );
};

export default LoginForm;
