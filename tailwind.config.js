/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'neutral': '#100018',
				'primary': '#4F0D56',
				'primary-dark': '#2B0830',
				'secondary': '#C972B3',
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(50% 50% at 50% 50%, rgba(180, 62, 143, 0.7) 0%, rgba(180, 62, 143, 0) 100%);',
				'cats': 'url("/cats-background.svg")',
				'office': 'url("/images/gather.webp")',
				'header': 'url("/images/header.webp")',
				'header-projects': 'url("/images/header-projects.webp")',
				'header-blog': 'url("/images/header-blog.webp")',
				'me-art': 'url("/images/me-art.webp")',
				'me': 'url("/images/me.webp")',
				'cto-illu1': 'url("/images/cto_illustration1.webp"), radial-gradient(circle closest-side, #B43E8F, #100018)',
				'cto-illu2': 'url("/images/cto_illustration2.webp"), radial-gradient(circle closest-side, #B43E8F, #100018)',
				'offer1': 'url("/images/offer1.webp")',
				'offer2': 'url("/images/offer2.webp")',
			},
			maxWidth: {
				desktop: '1440px',
			},
			backgroundSize: {
				full: 'auto 100%',
			},
			typography: () => ({
				dark: {
					css: {
						'color': 'white',
						'h1': {
							color: 'white',
						},
						'h2': {
							color: '#FF33DE',
						},
						'h3, h4': {
							color: 'white',
						},
						'a': {
							color: '#FF33DE',
						},
						'p , code , strong, li': {
							'color': 'white',
							'font-family': 'Poppins, Lato, Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
						},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
