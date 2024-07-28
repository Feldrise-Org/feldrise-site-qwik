import {component$} from '@builder.io/qwik';
import Button from '~/components/button';
import CalendlyButton from '~/components/calendly-button';

export default component$(() => {
	return (
		<div class="max-w-desktop grow gap-8">
			<section
				class="
				flex
				flex-col items-start
				rounded-md bg-[rgba(0,0,0,0.30)] px-10
				py-12 shadow-lg backdrop-blur-lg lg:w-1/2
			"
			>
				<img alt="Logo de Feldrise" src="/logo-feldrise/logo-large.png" width={263} height={92} />

				<h1 class="pt-4 text-2xl font-bold">La solution CTO pour les startups et PME</h1>
				<div class="h-12" />
				<p>
					Parcequ'un projet digital ne se réalise pas seul, nous sommes là pour vous aider à innover et atteindre vos objectifs grâce à l’expertise de nos CTO.
				</p>
				<div class="h-12" />

				{/* The Buttons */}
				<div
					class="
					flex
					w-full flex-col items-center gap-4 md:flex-row
				"
				>
					<CalendlyButton />
					<Button href="#whyacto" buttonStyle="secondary">
						En savoir plus
					</Button>
				</div>
			</section>
		</div>
	);
});
