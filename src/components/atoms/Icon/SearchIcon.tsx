import Image from "next/image";
import React from "react";

/**
 * 検索アイコン
 * @returns
 */
const SearchIcon = () => {
  const srcUrl = "/search_icon_black.png";
  return <Image width={30} height={30} src={srcUrl} alt="検索アイコン" />;
};

export default SearchIcon;
