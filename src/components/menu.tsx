import {component$, useSignal} from '@builder.io/qwik';
import cx from 'classnames';
import CalendlyButton from './calendly-button';

interface IRoute {
	name: string;
	href: string;
}

const routes: IRoute[] = [
	{
		name: 'Accueil',
		href: '/',
	},
	{
		name: 'Projets',
		href: '/projets',
	},
	{
		name: 'Le Blog',
		href: '/blog',
	},
	{
		name: 'Nos bureaux virtuels',
		href: 'https://app.gather.town/app/0raFgE4sC0iW2rE4/Feldrise',
	},
];

export default component$(() => {
	const showSlider = useSignal<boolean>(false);

	return (
		<>
			<header class="fixed top-0 z-40 flex min-h-[90px] w-full items-center justify-center bg-neutral py-8">
				<div class="flex max-w-desktop grow items-center justify-between px-8">
					<a href="/" class="hidden 2xl:block">
						<img src="/logo-feldrise/logo-large.png" width={197} height={48} alt="Website's logo" />
					</a>
					<a href="/" class="block 2xl:hidden">
						<img src="/logo-feldrise/logo.svg" width={75} height={48} alt="Website's logo" />
					</a>
					<div class="flex gap-8">
						<CalendlyButton />
						<button class="block" onClick$={() => (showSlider.value = true)}>
							{/* eslint-disable-next-line max-len */}
							<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
								<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</header>
			<div
				class={cx(
					showSlider.value ? 'translate-x-0' : 'translate-x-full',
					'fixed right-0 top-0 flex h-full min-w-[400px] flex-col',
					'z-50 bg-neutral shadow-2xl shadow-black',
					'duration-300'
				)}
			>
				<button class="w-fit px-4 py-4" onClick$={() => (showSlider.value = false)}>
					{/* eslint-disable-next-line max-len */}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" />
					</svg>
				</button>
				{routes.map((route, index) => (
					<a
						href={route.href}
						key={index}
						class={cx(
							'relative !py-4 text-center text-2xl text-white hover:bg-primary',
							"after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[90%] after:-translate-x-1/2 after:content-['']",
							'after:bg-primary'
						)}
						onClick$={() => (showSlider.value = false)}
					>
						{route.name}
					</a>
				))}
			</div>
		</>
	);
});
