import { merge } from 'theme-ui';
import { tailwind } from '@theme-ui/presets';
import originalTheme from '@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index';

const theme = merge(originalTheme, {
  initialColorModeName: 'light',
  colors: {
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        primary: tailwind.colors.purple[7],
        secondary: `#5f6c80`,
        toggleIcon: tailwind.colors.gray[8],
        background: tailwind.colors.white,
        heading: `#db7093`,
        divide: tailwind.colors.gray[4],
        muted: tailwind.colors.gray[3]
      },
      dark: {
        text: tailwind.colors.gray[4],
        primary: tailwind.colors.purple[5],
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: `#db7093`,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8]
      }
    }
  }
});

export default theme;
