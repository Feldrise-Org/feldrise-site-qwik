import {component$} from '@builder.io/qwik';


export default component$(() => {
	return (
		<section class="max-w-desktop px-8 pt-8 pb-8 mb-4">
			<p class="text-xl">
				Dans le cadre du salon, nous vous proposons de nous laisser vos coordonnées pour que nous vous recontactions plus tard.
			</p>
			<div class="h-8" />
			<p class="bg-primary text-white rounded-md p-8">
				<strong>Vous avez un projet dont vous souhaitez discuter avec un de nos CTO ?</strong> À la fin de ce formulaire, vous pourrez
				prendre rendez-vous <strong>sur un créneau pendant le salon.</strong>
			</p>
		</section>
	);
});
