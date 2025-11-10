/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary1: '#213555',
      primary2: '#3E5879',
      primary3: '#D8C4B6',
      primary350: '#3E587977',
      primary4: '#F5EFE7',
      secondary: '#19bfd3',
      white: '#ffffff',
      text: '#2c3e50',
      icon: '#abb2b9',
      bg: '#eaecee',
      error: '#e74c3c',
      success: '#27ae60',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    extend: {},
    fontFamily: {
      Zain: ['Zain']
    }
  },
  plugins: []
};
