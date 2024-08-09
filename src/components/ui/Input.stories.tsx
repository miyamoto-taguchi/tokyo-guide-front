import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Number: Story = {
  args: {
    type: "number",
  },
};
export const CheckBox: Story = {
  args: {
    type: "checkbox",
  },
};
export const Date: Story = {
  args: {
    type: "date",
  },
};
export const Password: Story = {
  args: {
    type: "password",
  },
};
