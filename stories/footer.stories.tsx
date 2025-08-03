import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "@/components/footer";

const meta = {
  title: "Footer",
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterBanner: Story = {
  args: {
    data: {
      title: "Web Applicaiton",
      description: "TESTING TESTING",
    },
  },
};
