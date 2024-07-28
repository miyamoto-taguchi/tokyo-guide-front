import type { Meta, StoryObj } from "@storybook/react";

import Star, { StarProps } from "./Star";

const defaultArgs: StarProps = {
  isSelected: true,
};

/**
 * ログインフォームコンポーネントのストーリー
 * Atoms/Star.tsx
 */
const meta = {
  title: "Example/StarIcon",
  component: Star,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: defaultArgs,
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
