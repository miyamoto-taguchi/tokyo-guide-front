import type { Meta, StoryObj } from "@storybook/react";
import AvatarIcon from "./AvatarIcon";

const meta = {
  title: "Atoms/Icons/AvatarIcon",
  component: AvatarIcon,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    href: process.env.NEXT_PUBLIC_TAGUCHI_GITHUB_URL,
    fallback: "TH",
    src: "/猫.png",
  },
} satisfies Meta<typeof AvatarIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
