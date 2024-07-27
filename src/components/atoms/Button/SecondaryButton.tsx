import { Button, ButtonProps } from "@/components/ui/button";
import React from "react";

type SecondaryButtonProps = ButtonProps;

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Button variant="secondary" {...rest}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
