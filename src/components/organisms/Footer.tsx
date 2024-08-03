import React from "react";
import Typography from "@atoms/Typography";
import AvatarIcon from "@atoms/Icon/AvatarIcon";
import TopicList, { Topic } from "@molcules/TopicList";

/**
 * フッター
 */
const Footer = () => {
  const taguchiURL = process.env.NEXT_PUBLIC_TAGUCHI_GITHUB_URL || "";
  const miyamotoURL = "";
  const topicList: Topic[] = [
    { href: "", label: "sample" },
    { href: "", label: "sample" },
    { href: "", label: "sample" },
  ];
  return (
    <footer className="p-6">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Typography variant="heading" size="xl2">
            Tokyo Guide
          </Typography>
          <div className="flex justify-start items-center gap-4">
            <AvatarIcon href={taguchiURL} src="/猫.png" fallback="TH" />
            {/* 自身のURLと画像をあとでお願いします！ */}
            <AvatarIcon href={miyamotoURL} src="/" fallback="MK" />
          </div>
        </div>

        <div className="grid grid-cols-3">
          <TopicList topicTitle="Topic" topicList={topicList} />
          <TopicList topicTitle="Topic" topicList={topicList} />
          <TopicList topicTitle="Topic" topicList={topicList} />
        </div>
      </div>

      <div className="text-center mt-4">
        <Typography size="lg">© 2024 Miyamoto-Taguchi Inc.</Typography>
      </div>
    </footer>
  );
};

export default Footer;
