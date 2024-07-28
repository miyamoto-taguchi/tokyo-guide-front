import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

/**
 * ボタンのストーリー
 * shadcn/Button.tsx
 */
const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
