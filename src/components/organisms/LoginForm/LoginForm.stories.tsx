import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoginForm from "./LoginForm";

/**
 * ログインフォームコンポーネントのストーリー
 * organisms/LoginForm.tsx
 */
const meta = {
  title: "organisms/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onSubmit: fn() },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
