/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
	theme: {
        screens: {
            sm: '480px',
            "md-600": '600px',
            md: '768px',
            "md-820":  "820px",
            lg: '1024px',
            xl: '1280px',
            "2xl": '1536px'
        },
        colors: {
        },
        fontFamily: {
            sans: ['Roboto Condensed', 'Inter var','Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            gridTemplateColumns: {
                "cart-table": '1fr 6fr 4fr 3fr 5fr'
            },
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			}
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },  },
	plugins: [],
};
