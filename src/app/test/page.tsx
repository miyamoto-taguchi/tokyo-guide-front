import { LinkButton } from "@/components/atoms/Button";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/fetchSample", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

/**
 * テストページ サーバーコンポーネントとして使う
 * @returns
 */
const TestPage = async () => {
  const data = await getData();

  return (
    <>
      <p>name:{data.name}</p>
      <p>email: {data.email}</p>
      <LinkButton href="/">TOPへ戻る</LinkButton>
    </>
  );
};

export default TestPage;
