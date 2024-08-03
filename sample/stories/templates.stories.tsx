import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Components } from "./Components";

const meta = {
  title: "Example/Components",
  component: Components,
  // ドキュメント自動生成 https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // ストーリー表示レイアウト https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  //   コンポーネントのプロップス
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Components>;

export default meta;
type Story = StoryObj<typeof meta>;

// 各ストーリー
export const StoryName: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
