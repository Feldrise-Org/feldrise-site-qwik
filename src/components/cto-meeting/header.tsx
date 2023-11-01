import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<header class="flex w-full flex-col items-center justify-center bg-header-projects bg-cover bg-fixed bg-center py-12 md:py-12">
			<div
				class="
				flex w-full
				max-w-desktop items-center
				justify-center rounded-md bg-[rgba(0,0,0,0.30)] px-8
				py-16 shadow-lg backdrop-blur-lg
			"
			>
				<h1
					class="text-5xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px]"
					style={{
						textDecorationSkipInk: 'none',
					}}
				>
					Formulaire
				</h1>
			</div>
		</header>
	);
});
