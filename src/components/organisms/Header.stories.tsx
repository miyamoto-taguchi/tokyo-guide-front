import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { isLogin: false },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotLogin: Story = {
  args: {},
};

export const LogedIn: Story = {
  args: {
    isLogin: true,
  },
};
