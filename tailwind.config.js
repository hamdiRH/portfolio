module.exports = {
    content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '.5rem',
            },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            'roboto-slab': ['Roboto Slab', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#FA5252',
                'light-gray': '#F3F6F6',
                'mid-dark': '#1D1D1D',
            },
            backgroundImage: {
                'image-dark': "url('./src/assets/images/bg-image.jpg')",
                'image-light': "url('./src/assets/images/bg-light.jpg')",
            },
        },
    },
    plugins: [],
}
