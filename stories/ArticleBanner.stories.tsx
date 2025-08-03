import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ArticleBanner from "@/components/ArticleBanner";

const meta = {
  title: "ArticleBanner",
  component: ArticleBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {
  args: {
    data: {
      title: "Web Applicaiton",
      description: "TESTING TESTING",
    },
  },
};
