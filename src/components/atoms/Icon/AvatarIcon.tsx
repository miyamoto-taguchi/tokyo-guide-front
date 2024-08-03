import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarIconProps = {
  href: string;
  src: string;
  fallback: string;
};

/**
 * アバターアイコン
 * @param href GitHubのページリンク
 * @param src 画像のURL
 * @param fallback 画像が表示されない場合の代替テキスト
 */
const AvatarIcon: React.FC<AvatarIconProps> = (props) => {
  const { href, src, fallback } = props;
  return (
    <>
      <a href={href} target="_blank">
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </a>
    </>
  );
};

export default AvatarIcon;
