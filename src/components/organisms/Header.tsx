import React from "react";
import Search from "../molcules/Search/Search";
import { LinkButton } from "../atoms/Button";

type HeaderProps = {
  isLogin: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLogin }) => {
  return (
    <div className=" fixed shadow-md w-full p-3 flex gap-4 justify-between items-center bg-slate-200">
      <p>Tokyo Guide Logo</p>
      <Search />
      <div className="flex gap-2 justify-between items-center">
        <LinkButton href="/">HOME</LinkButton>
        <LinkButton href="/">ABOUT</LinkButton>
        <LinkButton href="/">DOCS</LinkButton>
      </div>
      {isLogin ? <>ログアウト</> : <>ログイン</>}
    </div>
  );
};

export default Header;
