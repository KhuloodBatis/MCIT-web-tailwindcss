/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./components/**/*.{js,ts,jsx,tsx}", ],
    theme: {
        extend: {
            fontFamily: {
                // 'bukra1': ['BUKRA', 'regular'],
                'adelia': ['ADELIA', 'cursive'],
                // bukra2: ["bukra", "Regular"]
                'sans': ['bukra', 'Helvetica', 'Arial', 'sans-serif']
            },
            colors: {
                firstBtn: "#4364A1",
                middBtn: "#6181B7",
                secondBtn: "#4364A1",
                thirdBtn: "#2D77A2",
                hoverBtn: "#25ADD7",
                hoverBtn2: "#0888AF",
                fontColor1: "#273C7B",
                fontColor2: "#575756",
                bgColor1: "#FAFAFA",
                fourthBtn: "#13378E",
                greenColor: "#01DAE2",
                dividerColor: "#009ABA",
                bgfiel: "#0000002B",
                textColor: "#575756"
            },
            screens: {
                'xsm': '412px'
            },


        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: [],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },


}