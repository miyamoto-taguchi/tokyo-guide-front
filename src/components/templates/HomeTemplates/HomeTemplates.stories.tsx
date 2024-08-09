import type { Meta, StoryObj } from "@storybook/react";
import HomeTemplates from "./HomeTemplates";
import RootLayout from "@/app/layout";

const meta = {
  title: "Templates/HomeTemplates",
  component: HomeTemplates,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: [
    (story) => (
      <RootLayout>
        <HomeTemplates />
      </RootLayout>
    ),
  ],
} satisfies Meta<typeof HomeTemplates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
