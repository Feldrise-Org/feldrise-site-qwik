import {Slot, component$} from '@builder.io/qwik';
import cx from 'classnames';

interface IOfferCardProps {
	image: string;
	title: string;
	price: string;
}

export default component$<IOfferCardProps>(props => {
	const className = cx('flex flex-col items-center bg-primary justify-end min-h-[200px] bg-contain bg-no-repeat bg-center h-10 p-4', props.image);
	return (
		<article class="h-full w-full grow rounded-md border border-primary">
			{/* L'image de l'offre */}
			<div class={className}>
				<h3 class="rounded-md bg-neutral px-4 py-2 text-xl md:text-2xl">{props.title}</h3>
			</div>
			<div class="flex flex-col gap-4 p-6">
				<p class="text-secondary">{props.price}</p>
				<Slot />
			</div>
		</article>
	);
});
