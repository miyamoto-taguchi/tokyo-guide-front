"use client";
import { SerchIcon } from "@/components/atoms/Icon";
import { TextField } from "@/components/atoms/Input";
import React from "react";

const Serch = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex gap-2 justify-left items-center">
      <SerchIcon />
      <TextField placeHolder="sample" handleChange={handleChange} />
    </div>
  );
};

export default Serch;
