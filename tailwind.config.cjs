const tw = require("arvara/tailwind.config");

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    plugins: [],
    ...tw,
};
// module.exports = {
  
//     content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//     plugins: [],
//     ...tw,
// };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
