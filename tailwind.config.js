/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                basic: ['Roboto', 'sans-serif']
            },
            colors: {
                active_gray: "#f1f1f1",
                hover_gray: "#f5f5f5",

                bg_page: "#f5f5f5",
                tw_blue: "#5095ec",
                tw_black: "#505050",
                second_tx: "#8f8f8f",
                tw_gray: "#d3d8de",
                bg: '#f1f1f1',
                bg2: '#fafafa',

                connections: "#e33939",
                events: "#47b091",

                d_hover: "#404040",
                d_divider: "#505050",
                d_bg: "#202020",
                d_mainbar: "#303030",
                d_subbar: "#252525",
                d_logo: "#ffffff",
                d_content: "#303030"
            }
        }
    },
    plugins: [],
}

