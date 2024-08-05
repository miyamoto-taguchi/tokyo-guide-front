import React from "react";
import { LinkButton } from "@atoms/Button";
import SearchInput from "@molecules/SearchInput/SearchInput";

type HeaderProps = {
  isLogin: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLogin }) => {
  return (
    <div className=" bg-primary text-white sticky top-0 shadow-md w-full p-3 flex gap-4 justify-between items-center">
      <p>Tokyo Guide Logo</p>
      <SearchInput />
      <div className="flex gap-2 justify-between items-center">
        <LinkButton href="/">HOME</LinkButton>
        <LinkButton href="/">ABOUT</LinkButton>
        <LinkButton href="/">DOCS</LinkButton>
        {isLogin ? <>ログアウト</> : <>ログイン</>}
      </div>
    </div>
  );
};

export default Header;
