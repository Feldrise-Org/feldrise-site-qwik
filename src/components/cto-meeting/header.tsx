import {component$} from '@builder.io/qwik';

export default component$(() => {
	return (
		<header class="w-full py-12 md:py-12 flex justify-center items-center flex-col bg-header-projects bg-fixed bg-cover bg-center">
			<div class="
				w-full max-w-desktop
				px-8 py-16
				bg-[rgba(0,0,0,0.30)] shadow-lg backdrop-blur-lg rounded-md
				flex justify-center items-center
			">
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
