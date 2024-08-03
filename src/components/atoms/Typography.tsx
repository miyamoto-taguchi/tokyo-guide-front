import * as React from "react";

const fontSizes = {
  default: "text-base",
  sm: "text-sm",
  lg: "text-lg",
  xl2: "text-2xl",
};

const variants = {
  default: "whitespace-nowrap font-medium",
  heading: "font-black",
};

type TypographyProps = {
  variant?: "default" | "heading";
  size?: "default" | "sm" | "lg" | "xl2";
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "default",
  size = "default",
  children,
}) => {
  const styles = `${variants[variant]} ${fontSizes[size]}`;

  return <p className={styles}>{children}</p>;
};

export default Typography;
