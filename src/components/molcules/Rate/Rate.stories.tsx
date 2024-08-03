import type { Meta, StoryObj } from "@storybook/react";

import Rate, { RateProps } from "./Rate";

const defaultArgs: RateProps = {
  initialRating: 1,
  onRatingChange: () => {
    console.log("rate");
  },
};

/**
 * ログインフォームコンポーネントのストーリー
 * Atoms/Star.tsx
 */
const meta = {
  title: "molecules/Rate",
  component: Rate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: defaultArgs,
} satisfies Meta<typeof Rate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
