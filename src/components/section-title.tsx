import {component$} from '@builder.io/qwik';

interface ISectionTitle {
	title: string;
	alignment?: 'start' | 'end';
}

export default component$<ISectionTitle>(props => {
	return (
		<div
			class="
			flex
			w-full items-center justify-center
			bg-primary py-8
			md:py-12
		"
		>
			<div class={`flex max-w-desktop grow px-8 ${props.alignment == 'end' ? 'justify-end' : 'justify-start'}`}>
				<h2 class="text-3xl font-bold uppercase md:text-5xl">{props.title}</h2>
			</div>
		</div>
	);
});
