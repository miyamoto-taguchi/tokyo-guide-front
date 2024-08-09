"use client";
import { Input, InputProps } from "@/components/ui/input";
import React from "react";

type TextFieldProps = InputProps;

const TextField: React.FC<TextFieldProps> = (props) => {
  const { ...rest } = props;
  return <Input {...rest} />;
};

export default TextField;
