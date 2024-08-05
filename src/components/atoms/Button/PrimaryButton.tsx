import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";

type PrimaryButtonProps = ButtonProps & {
  children: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Button variant="default" {...rest}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
