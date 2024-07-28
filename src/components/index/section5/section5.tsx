import {component$} from '@builder.io/qwik';
import PortraitImage from './portrait-image';

export default component$(() => {
	return (
		<section class="flex w-full items-center justify-center border-t-[32px] border-primary bg-cats bg-cover bg-fixed">
			<div class="flex max-w-desktop flex-col items-center justify-center gap-16 px-6 py-16 md:px-24">
				<section class="flex h-full items-center justify-center gap-4">
					<div
						class="
						col-span-2 rounded-2xl
						bg-[rgba(0,0,0,0.45)] px-6 py-12 shadow-lg backdrop-blur md:p-12"
					>
						<p class="text-3xl text-secondary">Vous voulez en savoir plus sur Feldrise ?</p>
						<div class="my-2 h-1 w-1/3 bg-secondary" />
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-1">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">Quelle est la mission de Feldrise ?</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-1" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									La mission de Feldrise est d'offrir un accompagnement sur mesure et innovant dans le développement de projets numériques. Nous nous engageons
									à transformer votre vision en réalité en vous aidant à créer votre propre équipe technique, en fournissant des solutions technologiques
									adaptées à vos besoins, qu'il s'agisse d'intelligence artificielle, de logiciels, de jeux vidéo ou d'applications mobiles. En allant au-delà
									du simple rôle de prestataire, nous nous positionnons comme partenaires, en vous offrant flexibilité, adaptabilité et un contrôle complet sur
									votre projet, tout en préservant la propriété intellectuelle et en optimisant les coûts. Chez Feldrise, nous nous démarquons par notre
									capacité à comprendre en profondeur vos besoins, à développer des prototypes adaptés, à recruter et à gérer votre équipe technique, en
									assurant une communication fluide et une collaboration efficace à travers nos bureaux virtuels et espaces de coworking. Notre engagement est
									de garantir la qualité et l'efficacité à chaque étape de votre projet, en veillant à ce que chaque solution proposée soit alignée sur vos
									objectifs à long terme.
								</div>
							</div>
						</div>
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-2">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">Quels types de solutions technologiques Feldrise accompagne-t-elle ?</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-2" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									Feldrise est équipée pour prendre en charge une vaste gamme de projets numériques, couvrant des domaines aussi divers que l'intelligence
									artificielle, le développement de logiciels, la création de jeux vidéo, la réalisation d'applications mobiles et plus encore. Notre
									polyvalence et notre expertise technique nous permettent de répondre à vos besoins spécifiques avec des solutions sur mesure, quelle que soit
									la complexité de votre projet.
								</div>
							</div>
						</div>
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-3">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">Quelles sont les grandes étapes de l’accompagnement d’un directeur technique chez Feldrise ?</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>{' '}
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-3" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									L’accompagnement d'un directeur technique chez Feldrise se déroule en plusieurs étapes clés pour garantir le succès de votre projet :<br />
									<br />
									<span class="rounded-lg bg-primary p-1">1</span> Analyse des Besoins :
									<br /> La première étape consiste à comprendre en profondeur les besoins spécifiques de votre projet lors de l’atelier gratuit avec un de nos
									directeurs techniques. Cette phase essentielle nous permet d'identifier les objectifs et les défis à relever.
									<br />
									<br />
									<span class="rounded-lg bg-primary p-1">2</span> Développement du Prototype :
									<br />
									Contrairement à une agence traditionnelle, nous adoptons une approche plus personnalisée pour le développement du prototype, en travaillant
									directement avec vous et surtout avec une communication fluide et régulière.
									<br />
									<br />
									<span class="rounded-lg bg-primary p-1">3</span> Recrutement de l'Équipe :
									<br />
									En étroite collaboration avec vous, nous vous aiderons à la constitution de votre équipe technique pour correspondre aux besoins de votre
									projet.
									<br />
									<br />
									<span class="rounded-lg bg-primary p-1">4</span> Gestion de l'Équipe :
									<br />
									Une fois l'équipe en place, nous prenons en charge sa gestion quotidienne. Pour cela, nous mettons à disposition des bureaux virtuels et un
									espace de coworking, favorisant ainsi la collaboration et la communication efficace.
									<br />
									<br />
									<span class="rounded-lg bg-primary p-1">5</span> Suivi Hebdomadaire :
									<br />
									Enfin, nous organisons des points hebdomadaires avec le porteur du projet. Ces rendez-vous réguliers nous permettent d'assurer le bon
									déroulement du projet, d'ajuster les stratégies si nécessaire et de maintenir une dynamique de travail productive.
									<br />
									<br />
									Cette méthodologie permet de garantir un accompagnement sur mesure et efficace, adapté aux exigences uniques de chaque projet.
								</div>
							</div>
						</div>
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-4">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">Comment Feldrise identifie les besoins d'un projet numérique ?</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>{' '}
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-4" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									Vous pouvez d’abord prendre{' '}
									<a class="text-primary" href="https://calendly.com/feldrise-victor/45min?primary_color=aa33ff&month=2024-03" target="_blank">
										contact
									</a>{' '}
									avec l’un de nos directeurs techniques ou même venir directement nous voir dans{' '}
									<a class="text-primary" href="https://app.gather.town/app/0raFgE4sC0iW2rE4/Feldrise" target="_blank">
										nos bureaux virtuels
									</a>
									. De plus chez Feldrise, nous offrons un atelier gratuit pour nouer le premier contact et discuter de votre projet. Ensemble, nous explorerons
									vos besoins numériques via une mindmap, ce qui nous permet de saisir pleinement les enjeux. À partir de cette mindmap, nous élaborerons une
									roadmap, ou plan d'action, détaillant les étapes clés pour le développement numérique de votre projet.{' '}
								</div>
							</div>
						</div>
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-5">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">
											Y a-t-il une flexibilité dans la collaboration si les objectifs ou les besoins de notre entreprise évoluent au cours du projet ?
										</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>{' '}
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-5" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									Plus qu'un prestataire, nous sommes votre partenaire. Nous comprenons que les objectifs et les besoins d'un projet peuvent évoluer avec le
									temps, et nous sommes pleinement équipés pour nous adapter à ces changements. Notre système de collaboration est conçu pour être réactif et
									modulable, permettant une ajustement fluide à vos exigences. Que ce soit par la redéfinition de la roadmap, l'ajustement des ressources
									allouées, ou l'adaptation de l'équipe technique à vos nouveaux besoins.{' '}
								</div>
							</div>
						</div>
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-6">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">
											Quels sont les avantages de travailler avec des stagiaires ou bien des alternants sous la direction technique de Feldrise ?
										</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>{' '}
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-6" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									Opter pour un stagiaire représente une solution économique, il travaille à temps plein au sein de votre équipe. Notre rôle est de mener le
									processus de recrutement, d'assurer la supervision et de veiller à la qualité du travail. Cette approche vous offre une valeur ajoutée tout en
									maîtrisant les coûts, garantissant ainsi un résultat professionnel et satisfaisant.
								</div>
							</div>
						</div>
						<div class="relative">
							<h2 class="mb-0">
								<button class="group w-full cursor-pointer transition-all ease-in" data-collapse-target="collapse-7">
									<div class="rounded-t-1 font-semibol relative m-0 flex  w-full items-center border-b border-solid p-4 text-left group-open:border-hidden">
										<span class="pr-4">Quel est le modèle de tarification de Feldrise pour ses services ?</span>
										<i class="fa fa-chevron-down absolute right-0 pt-1 text-base transition-transform group-open:rotate-180"></i>{' '}
									</div>
								</button>
							</h2>
							<div data-collapse="collapse-7" class="h-0 overflow-hidden transition-all duration-300 ease-in-out">
								<div class="text-blue-gray-500/80 border-b p-4 text-base leading-normal">
									Le modèle tarifaire de Feldrise repose sur un système contractuel flexible, similaire à un abonnement mensuel, avec une obligation minimale de
									deux demi-journées par mois. Ces demi-journées offrent une flexibilité totale, pouvant être réparties en heures tout au long du mois selon vos
									besoins. Au début de chaque mois, nous déterminons ensemble le nombre demi-journées requises pour le projet. En fin de mois, vous êtes facturé
									uniquement le temps effectivement utilisé.
								</div>
							</div>
						</div>
						<script src="node_modules/@material-tailwind/html/scripts/collapse.js"></script>
						<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
					</div>
				</section>

				<h2
					class="text-3xl font-bold underline decoration-primary decoration-[10px] underline-offset-[-5px] md:text-5xl"
					style={{
						textDecorationSkipInk: 'none',
					}}
				>
					Ils en parlent mieux que nous
				</h2>

				<div
					class="
					flex
					h-full items-center justify-center gap-4
				"
				>
					<div
						class="
						col-span-2 rounded-2xl
						bg-[rgba(0,0,0,0.45)] p-12 shadow-lg backdrop-blur
					"
					>
						<p>
							<span class="text-3xl text-secondary">Emilie NOUVEAU</span>
							&nbsp;-&nbsp; Néovoice
						</p>
						<div class="my-2 h-1 w-1/3 bg-secondary" />
						<p class="mt-6">
							J'ai contacté Feldrise pour m'aider à accompagner mes deux salariés dans le domaine du développement. En tant qu'entrepreneuse j'ai trouvé auprès
							de Victor un véritable soutien. Sérieux, disponible et toujours dans une très bonne ambiance, il a su être à l'écoute de mon projet et me proposer
							un service sur mesure de très grande qualité.
						</p>
					</div>
					<PortraitImage image="/images/reviews/emilie.jpeg" class="hidden lg:block" />
				</div>
			</div>
		</section>
	);
});
