module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#b576f2',
                secondary: '#261e34',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
