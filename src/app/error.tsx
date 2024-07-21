"use client";

import { LinkButton } from "@/components/atoms/Button";

const ErrorPage = () => {
  return (
    <>
      <h1>500 - Server Error</h1>
      <LinkButton href="/">TOPへ戻る</LinkButton>
    </>
  );
};

export default ErrorPage;
