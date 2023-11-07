/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo':"url('/src/assets/img/logo.png')",
        'users1':"url('/src/assets/img/icons/users1.svg')",
        'mail':"url('/src/assets/img/icons/mail.svg')",
      }
    },
  },
  plugins: [],
}