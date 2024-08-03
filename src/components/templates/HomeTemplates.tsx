import React from "react";
import { LinkButton } from "../atoms/Button";

/**
 * ホーム画面のテンプレート
 * @returns
 */
const HomeTemplates = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Welcom to Tokyo Guide</h1>
      <LinkButton href="/video">VideoPage</LinkButton>
      <LinkButton href="/test">TestPage</LinkButton>
    </div>
  );
};

export default HomeTemplates;
