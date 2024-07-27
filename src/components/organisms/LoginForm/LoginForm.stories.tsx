import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import LoginForm from "./";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/LoginForm",
  component: LoginForm,
  parameters: {
    // storybookの画面でのレイアウトオプション　centeredだと画面中央に配置される
    // https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  //  自動でドキュメントを生成してくれるか
  //  https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  //  プロップスに渡す値
  //  https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: { onSubmit: fn() },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// 各ストーリーのプロップスに渡す値
// https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
