import {component$} from '@builder.io/qwik';
import Button from '~/components/button';
import SectionTitle from '~/components/section-title';

export default component$(() => {
	return (
		<section id="whyacto" class="my-4 w-full text-base">
			<SectionTitle title="Pourquoi un CTO à temps partagé ?" alignment="end" />
			<div class="my-4 flex w-full items-center justify-center">
				<div class="flex max-w-desktop grow">
					{/* The illutrations */}
					<div
						class="
						hidden w-full
						grow flex-col items-center justify-center gap-4 md:flex
					"
					>
						<div
							class="
							bg-full100018 flex h-full
							w-full
							grow flex-col items-center justify-end rounded-md bg-cto-illu1
							bg-contain bg-no-repeat p-4
						"
						/>
						<div
							class="
							flex h-full w-full
							grow
							flex-col items-center justify-end rounded-md
							bg-cto-illu2 bg-contain bg-no-repeat p-4
						"
						/>
					</div>

					{/* The actual content */}
					<div
						class="
						flex
						grow flex-col gap-8 px-8
						py-8 lg:px-20 lg:py-16
					"
					>
						<p>
							Lorsqu'on lance un produit digital, les choix techniques sont capitaux pour le futur du projet. Mais c'est loin d'être le seul défi que vous allez
							rencontrer !<br />
							C'est pour cela que nous avons créé Feldrise. Comment recruter mon équipe ? Comment gérer les développeurs de mon équipe ? Qui sera là pour
							répondre à leurs questions ?<br />
							<br />
							Feldrise vous propose un accompagnement sur mesure par l'un de nos CTO pour répondre à tous ces challenges et vous permettre d'internaliser le
							développement de votre solution.
						</p>
						<div class="flex w-full flex-col items-center gap-4 md:flex-row">
							<Button href="https://github.com/Feldrise/Feldrise/blob/master/manifeste-cto.md">Lire le manifeste du CTO</Button>
							<Button href="/projets" buttonStyle="secondary">
								Les projets accompagnés
							</Button>
						</div>

						{/* L'accompagnement */}
						<div class="flex flex-col gap-10 rounded-md border border-primary p-4">
							<h3
								class="text-xl font-bold underline decoration-primary decoration-[5px] underline-offset-[-5px] md:text-3xl"
								style={{
									textDecorationSkipInk: 'none',
								}}
							>
								Comment fonctionne l'accompagnement ?
							</h3>

							<p>
								Vous voulez en discuter avec un de nos CTO ? Rendez-vous dans{' '}
								<a class="text-secondary" href="https://app.gather.town/app/0raFgE4sC0iW2rE4/Feldrise" target="_blank">
									nos bureaux virtuels
								</a>
							</p>

							{/* #1 */}
							<div class="flex flex-col gap-4">
								<h4 class="text-lg font-bold md:text-2xl">
									<span class="rounded-md bg-primary px-4 py-2">1</span> La prise de contact
								</h4>
								<p>
									L'accompagnement commence dès les premiers échanges ! Votre projet et situation étant unique, le but des premiers échanges est de déterminer
									quels seront vos besoin et comment nos CTO peuvent y répondre.
								</p>
							</div>

							{/* #2 */}
							<div class="flex flex-col gap-4">
								<h4 class="text-2xl font-bold">
									<span class="rounded-md bg-primary px-4 py-2">2</span> La mise en route
								</h4>
								<p>
									La deuxième étape consiste à lancer la machine. Cela se traduit souvent par le recrutement de l'équipe quand cela est nécessaire, puis la mise
									en place des différents outils nécessaires au projet et au déroulement de l'accompagnement. C’est aussi pendant les débuts que pourra être
									fourni les formations nécessaires pour rendre votre équipe opérationnelle le plus rapidement possible.
								</p>
							</div>

							{/* #3 */}
							<div class="flex flex-col gap-4">
								<h4 class="text-2xl font-bold">
									<span class="rounded-md bg-primary px-4 py-2">3</span> Le suivi du projet
								</h4>
								<p>
									Maintenant que l'équipe est opérationnelle, il faut que le projet avance ! C’est ici que tout devient intéressant : grâce aux outils mise en
									place et des méthodes flexible, nos CTO assurent un suivi du projet pour être prêt à intervenir quand c'est nécessaire.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});
