import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          washedPurple: '#B5B2FF',
          washedBlue: '#6889FF',
          primaryBlue: '#0469FF',
          primaryPurple: '#7000FF',
          neutrais: '#030014',
        },
        washed: {
          purple: {
            50: '#f8f7ff',
            100: '#e8e7ff',
            200: '#dddcff',
            300: '#cdcbff',
            400: '#c4c1ff',
            500: '#b5b2ff',
            600: '#a5a2e8',
            700: '#817eb5',
            800: '#64628c',
            900: '#4c4b6b',
          },
          blue: {
            50: '#f0f3ff',
            100: '#d0daff',
            200: '#bac9ff',
            300: '#9ab0ff',
            400: '#86a1ff',
            500: '#6889ff',
            600: '#5f7de8',
            700: '#4a61b5',
            800: '#394b8c',
            900: '#2c3a6b',
          },
        },
        primary: {
          blue: {
            50: '#e6f0ff',
            100: '#b1d1ff',
            200: '#8cbaff',
            300: '#579bff',
            400: '#3687ff',
            500: '#0469ff',
            600: '#0460e8',
            700: '#034bb5',
            800: '#023a8c',
            900: '#022c6b',
          },
          purple: {
            50: '#f1e6ff',
            100: '#d3b0ff',
            200: '#bd8aff',
            300: '#9f54ff',
            400: '#8d33ff',
            500: '#8d33ff',
            600: '#6600e8',
            700: '#5000b5',
            800: '#3e008c',
            900: '#2f006b',
          },
        },
        neutrals: {
          1: '#ffffff',
          2: '#fcfcfd',
          3: '#f5f5f6',
          4: '#f0f0f1',
          5: '#d9d9dc',
          6: '#c0bfc4',
          7: '#8e8c95',
          8: '#5b5966',
          9: '#474553',
          10: '#292637',
          11: '#211f30',
          12: '#171427',
          13: '#030014',
        },
      },
      fontSize: {
        desktopH1: [
          '2.8125rem',
          {
            lineHeight: '150%',
            fontWeight: '700',
          },
        ],
        desktopH2: [
          '2.25rem',
          {
            lineHeight: '130%',
            fontWeight: '500',
          },
        ],
        desktopH3: [
          '1.75rem',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        desktopH4: [
          '1.375rem',
          {
            lineHeight: '130%',
            fontWeight: '500',
          },
        ],
        desktopH5: [
          '1.125rem',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
        mobileH1: [
          '2.8125rem',
          {
            lineHeight: '150%',
            fontWeight: '700',
          },
        ],
        mobileH2: [
          '2.1875rem',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        mobileH3: [
          '1.5625rem',
          {
            lineHeight: '130%',
            fontWeight: '500',
          },
        ],
        mobileH4: [
          '1.125rem',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
        mobileH5: [
          '1',
          {
            lineHeight: '130%',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
