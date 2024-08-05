import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoginForm from "./";

/**
 * ログインフォームコンポーネントのストーリー
 * organisms/LoginForm.tsx
 */
const meta = {
  title: "Example/LoginForm",
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
