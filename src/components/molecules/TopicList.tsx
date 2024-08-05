import React from "react";
import { LinkButton } from "../atoms/Button";
import Typography from "../atoms/Typography";

export type Topic = {
  href: string;
  label: string;
};

type TopicListProps = {
  topicTitle: string;
  topicList: Topic[];
};

const TopicList: React.FC<TopicListProps> = (props) => {
  const { topicTitle, topicList } = props;
  return (
    <ul>
      <Typography size="lg">{topicTitle}</Typography>
      {topicList.map((item, index) => (
        <li key={index}>
          <LinkButton href={item.href}>{item.label}</LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default TopicList;
