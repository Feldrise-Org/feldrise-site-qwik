import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import SectionVideo from '~/components/index/section-video/section-video';
import Section1 from '~/components/index/section1/section1';
import Section2 from '~/components/index/section2/section2';
import Section3 from '~/components/index/section3/section3';
import Section4 from '~/components/index/section4/section4';
import Section5 from '~/components/index/section5/section5';

export default component$(() => {
	return (
		<main
			class="
			flex
			w-full flex-col items-center justify-center
		"
		>
			<Section1 />
			<Section2 />
			<SectionVideo />
			<Section3 />
			<Section4 />
			<Section5 />
		</main>
	);
});

export const head: DocumentHead = {
	title: 'Feldrise - La solution CTO en Bretagne',
	meta: [
		{
			name: 'description',
			content: 'Feldrise est une agence digitale Bretonne proposant un accompagnement complet dans la réalisation technique de votre projet.',
		},
		{
			name: 'og:title',
			content: 'Feldrise - La solution CTO en Bretagne',
		},
		{
			name: 'og:description',
			content: 'Feldrise est une agence digitale Bretonne proposant un accompagnement complet dans la réalisation technique de votre projet.',
		},
		{
			name: 'og:url',
			content: 'https://feldrise.com',
		},
		{
			name: 'og:image',
			content: 'https://feldrise.com/logo-feldrise/icon-white-logo.png',
		},
	],
};
