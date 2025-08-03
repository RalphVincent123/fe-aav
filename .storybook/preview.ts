import type { Preview } from '@storybook/nextjs-vite'
import "../styles/index.scss"
const customViewports = {
  largeDesktop: {
    name: "Large Desktop",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1366px",
      height: "768px",
    },
  },
  smallDesktop: {
    name: "Small Desktop",
    styles: {
      width: "1280px",
      height: "1024px",
    },
  },
  extrasmallDesktop: {
    name: "Extra Small Desktop",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
    },
  },
};

export default preview;