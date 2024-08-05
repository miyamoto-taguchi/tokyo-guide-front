import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "./LinkButton";

/**
 * リンクボタンのストーリー
 */
const meta = {
  title: "Example/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "LinkButton",
    href: "/",
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
