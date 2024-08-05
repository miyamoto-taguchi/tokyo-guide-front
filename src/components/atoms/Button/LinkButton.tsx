import Link, { LinkProps } from "next/link";
import React from "react";

type LinkButtonProps = LinkProps & {
  children: string;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <>
      <Link
        className=" text-blue-400 cursor-pointer duration-75 hover:text-blue-700 active:opacity-50"
        {...rest}
      >
        {children}
      </Link>
    </>
  );
};

export default LinkButton;
