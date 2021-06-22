module.exports = {
  prefix: 'tw-',
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  // 禁用 tailwind 自己的 normailze, 与 antd 的冲突
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      primary: '#be8e62',
      secondary: '#c9c4ca',
      black: '#000',
      white: '#fff',
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    fontSize: {
      1: '10px',
      2: '12px',
      3: '14px',
      4: '18px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
