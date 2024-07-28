import {component$} from '@builder.io/qwik';
import Button from '~/components/button';

export default component$(() => {
	return (
		<section
			class="
			flex
			w-full items-center justify-center
			bg-office bg-cover bg-fixed bg-center
		"
		>
			<div
				class="
				flex
				max-w-desktop flex-col
				items-center justify-center gap-16 px-6 py-24 md:px-24 md:py-48
			"
			>
				<div
					class="flex
					h-full items-center justify-center gap-4
				"
				>
					<div
						class="
						flex flex-col gap-8 rounded-2xl
						bg-[rgba(0,0,0,0.45)] p-8  shadow-lg backdrop-blur md:p-12
					"
					>
						<h2
							class="text-2xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px] md:text-5xl"
							style={{
								textDecorationSkipInk: 'none',
							}}
						>
							Découvrez nos bureaux virtuels
						</h2>
						<p>Rejoignez-nous dans les bureaux Gather de Feldrise !</p>
						<p>
							Nous sommes ravis de vous inviter à rejoindre notre espace virtuel, le centre de notre communauté Feldrise. Que vous soyez un membre de notre
							équipe, un partenaire commercial ou simplement intéressé par ce que nous faisons, nos bureaux Gather sont l'endroit idéal pour se connecter,
							collaborer et échanger des idées.
						</p>
						<Button href="https://app.gather.town/app/0raFgE4sC0iW2rE4/Feldrise">Rejoindre les bureaux</Button>
					</div>
				</div>
			</div>
		</section>
	);
});
