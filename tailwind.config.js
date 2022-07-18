/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "Cairo": ["Cairo", "sans-serif"]
            },
            colors: {
                firstBtn: "#4364A1",
                middBtn: "#6181B7",
                secondBtn: "#4364A1",
                thirdBtn: "#318EBA",
                hoverBtn: "#25ADD7",
                hoverBtn2: "#0888AF",
                fontColor1: "#273C7B",
                fontColor2: "#575756",
                bgColor1: "#FAFAFA",
                fourthBtn: "#13378E",


            },
        },
    },
    plugins: [],
}