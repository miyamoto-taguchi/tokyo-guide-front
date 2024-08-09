"use client";
import { SearchIcon } from "@/components/atoms/Icon";
import { TextField } from "@/components/atoms/Input";
import { InputProps } from "@/components/ui/input";
import React from "react";

type SearchInputProps = InputProps;

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { ...rest } = props;
  return (
    <div className="flex gap-2 justify-left items-center">
      <SearchIcon />
      <TextField {...rest} />
    </div>
  );
};

export default SearchInput;
