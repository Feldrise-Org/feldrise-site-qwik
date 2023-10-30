import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<section class="flex w-full items-center justify-center">
			<div class="mx-8 my-24 flex w-full max-w-desktop grow flex-wrap items-center justify-center gap-4">
				<h2>
					Dans le cadre du salon, <span class="text-primary">Entreprendre dans l'ouest</span>, nous vous proposons des entretiens de 15 minutes afin que nous
					puissions échanger à propos de vos projets
				</h2>
			</div>
		</section>
	);
});
