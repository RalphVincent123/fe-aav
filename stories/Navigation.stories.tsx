import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navigation from "@/components/Navigation/Navigation";

const meta = {
  title: "Navigation",
  component: Navigation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationBanner: Story = {
  args: {
    data: {
      title: "Web Applicaiton",
      description: "TESTING TESTING",
    },
  },
};
