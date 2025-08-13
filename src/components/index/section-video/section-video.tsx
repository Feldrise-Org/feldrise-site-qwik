import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<secton id="feldrisevideo" class="my-4 flex w-full flex-col items-center justify-center bg-radial-gradient px-8 py-12 md:px-20">
			<h2 class="w-full text-center text-3xl font-bold uppercase md:text-5xl">Feldrise en vidéo</h2>
			<iframe
				width="896"
				height="504"
				loading="lazy"
				class="mt-12 h-auto max-w-full px-4 md:h-[504px]"
				src="https://www.youtube.com/embed/USW-P3A5m68?si=qVM9rxTJ2p8D1xIY&controls=2"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</secton>
	);
});
