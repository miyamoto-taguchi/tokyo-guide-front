"use client";
import { SearchIcon } from "@/components/atoms/Icon";
import { TextField } from "@/components/atoms/Input";
import React from "react";

const SearchInput = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <div className="flex gap-2 justify-left items-center">
      <SearchIcon />
      <TextField placeHolder="sample" handleChange={handleChange} />
    </div>
  );
};

export default SearchInput;
